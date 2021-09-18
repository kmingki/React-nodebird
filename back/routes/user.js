const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User, Post } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        if (req.user) {
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id']
                },{
                    model: User,
                    as: 'Followings',
                    attributes: ['id']
                }
            ]
            });
            console.log(fullUserWithoutPassword);
            return res.status(200).send(fullUserWithoutPassword);
        } else {
            return res.status(200).send(null);
        }

    } catch (err) {
        console.log(err);
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const fullUserWithoutPassword = await User.findOne({
            where: { id: req.params.id },
            attributes: {
                exclude: ['password']
            },
            include: [{
                model: Post,
                attributes: ['id'],
            }, {
                model: User,
                as: 'Followers',
                attributes: ['id']
            },{
                model: User,
                as: 'Followings',
                attributes: ['id']
            }
        ]
        });
        
        if (fullUserWithoutPassword) {
            const data = fullUserWithoutPassword.toJSON();
            data.Posts = data.Posts.length;
            data.Followings = data.Followings.length;
            data.Followers = data.Followers.length;
            return res.status(200).json(data);
        } else {
            return res.status(404).send('존재하지 않는 사용자입니다.');
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where:{
                email: req.body.email,
            }
        });

        if( exUser ) {
            return res.status(403).send('이미 사용 중인 아이디입니다.');
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);// resolve의 값을 리턴
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(201).send('ok');

    } catch (error) {
        console.error(error);
        next(error);
    }
});

/// (req, res, next) => ... 는 미들웨어
router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }

        if (info) {
            return res.status(401).send(info.reason);
        }

        req.logIn(user, async function(err) {

            if (err) { 
                console.error(err);   
                return next(err); 
            }

            try{
                //await 안써서 fullUserWithoutPassword가 null이었다.
                const fullUserWithoutPassword = await User.findOne({
                where: { id : user.id },
                attributes: { exclude: ['password']},
                include: [{
                    model: Post,
                    attributes : [ 'id' ]
                },
                {
                    model: User,
                    as: 'Followers',
                    attributes : ['id']
                },
                {
                    model: User,
                    as: 'Followings',
                    attributes : ['id']
                }
            ]
            });
            return res.status(200).send(fullUserWithoutPassword);
            } catch (error) {
                console.log(error);
                return next(err);
            }
            
          });

    })(req, res, next);//라우터 미들웨어 안에 미들웨어
});


router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

router.patch('/changeNickname', isLoggedIn, async (req, res, next)=>{

    try {
        await User.update({nickname : req.body.nickname }, { where: { id : req.user.id }});

        res.status(200).send({nickname: req.body.nickname });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.get('/loadFollowers', isLoggedIn, async (req, res, next) => {
    
    try {
        const user = await User.findOne({ where: { id: req.user.id }});
        const followers = await user.getFollowers();

        return res.status(200).send(followers);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.get('/loadFollowings', isLoggedIn, async (req, res, next) => {

    try {
        const user = await User.findOne({ where: { id: req.user.id }});
        const followings = await user.getFollowings();

        return res.status(200).send(followings);
        
    } catch (err) {
        console.error(err);
        next(err);
    }

});

router.patch('/unfollow/:UserId', isLoggedIn, async (req, res, next)=>{
    
    try{
        const user = await User.findOne({ where: { id : req.params.UserId }});
        
        if (!user) {
            res.status(404).send('존재하지 않는 사용자 입니다.');
        }

        await user.removeFollowers(req.user.id);

        res.status(200).send({ UserId: parseInt(req.params.UserId, 10)});

    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.patch('/follow/:UserId', isLoggedIn, async (req, res, next) => {

    try {
        const user = await User.findOne({ where: { id : req.params.UserId }});

        if(!user){
            res.status(404).send('존재하지 않는 사용자 입니다.');
        }

        await user.addFollowers(req.user.id);
        res.status(200).send({ UserId : parseInt(req.params.UserId, 10 )});

    } catch(err){
        console.error(err);
        next(err);
    }
});

//patch(`/user/removeFollower/${data}`)
router.patch('/removeFollower/:UserId', isLoggedIn, async(req, res, next)=>{

    try {
        const user = await User.findOne({ where: { id : req.params.UserId }});

        if ( !user ) {
            res.status(403).send('존재하지 않는 사용자 입니다.');
        }

        await user.removeFollowings(req.user.id);
        console.log(req.user.id);

        res.status(200).send({ UserId : parseInt(req.params.UserId, 10)});

    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;