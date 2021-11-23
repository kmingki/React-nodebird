const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User, Post, Comment, Image } = require('../models');
const { Op } = require('sequelize');
const router = express.Router();

try {
    fs.accessSync('profile');
} catch (error) {
    console.log('profile 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('profile');
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'profile');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            done(null, basename + '_' + req.user.id + ext);
        },
    }),
    limits: { fileSize : 20 * 1024 * 1024},
});

router.post('/photo', isLoggedIn, upload.array('photo'), async(req, res, next) => {
    //console.log(req.files);
    res.json(req.files[0].filename);
    //res.json(req.files[].map((v)=> v.filename));
});

router.patch('/editUserProfile', isLoggedIn, upload.none(), async (req, res, next) => {
    try {
        //console.log(req.body.content);
        //console.log(req.body.photo);
        await User.update({ nickname : req.body.content }, { where: { id : req.user.id }});

        if (req.body.photo){
            await User.update({ photo: req.body.photo }, { where: { id : req.user.id }});
        }
        const userInfo = {
            nickname: req.body.content,
            photo : req.body.photo,
        }
        return res.status(200).json(userInfo);

    } catch (err) {
        console.error(err);
        next(err);
    }
});
router.get('/loadFollowers', isLoggedIn, async (req, res, next) => {
    
    try {
        const user = await User.findOne({ where: { id: req.user.id }});
        const followers = await user.getFollowers({
            limit: parseInt(req.query.limit, 10),
        });

        console.log('followers:'+followers);
        return res.status(200).send(followers);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.get('/loadFollowings', isLoggedIn, async (req, res, next) => {

    try {
        const user = await User.findOne({ where: { id: req.user.id }});
        const followings = await user.getFollowings({
            limit: parseInt(req.query.limit, 10),
        });
        console.log('followings:'+followings);
        return res.status(200).send(followings);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

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
            //console.log(fullUserWithoutPassword);
            return res.status(200).send(fullUserWithoutPassword);
        } else {
            return res.status(200).send(null);
        }

    } catch (err) {
        console.log(err);
        next(err);
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
        const user = await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });

        console.log(user);

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

router.patch('/removeFollower/:UserId', isLoggedIn, async(req, res, next)=>{

    try {
        const user = await User.findOne({ where: { id : req.params.UserId }});

        if ( !user ) {
            res.status(403).send('존재하지 않는 사용자 입니다.');
        }

        await user.removeFollowings(req.user.id);

        res.status(200).send({ UserId : parseInt(req.params.UserId, 10)});

    } catch (error) {
        console.error(error);
        next(error);
    }
});
//`/user/${data}/posts?lastId=${lastId || 0}`
router.get('/:userId/posts', async(req, res, next)=>{

    try{
        const where = { UserId: req.params.userId };
        if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐때, 스크롤시 게시글 불러오기
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
        }

        const posts = await Post.findAll({
            where,
            limit: 10,
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                attributes: [ 'id', 'nickname']
            }, {
                model: Image
            }, {
                model: Comment,
                include: {
                    model: User,
                    attributes: [ 'id', 'nickname' ]
                  }
            },{
                model: User,
                as: 'Likers',
                attributes: ['id'],
                through: {attributes: []},
            },{
                model: Post,
                as: 'Retweet',
                include : [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image
                }]
            }]
        });
        //console.log(posts);
        return res.status(200).send(posts);
    } catch (err) {
        console.error(err);
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
        console.error(error);
        next(error);
    }
});

router.get('/search/:userName', async (req, res, next) => {
    
    
    try {
        const users = await User.findAll({
            where: { nickname: req.params.userName },
            attributes: {
                exclude: ['password']
            },
        });

        
        return res.status(200).send(users);

    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;