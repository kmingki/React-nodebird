const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User, Post, Comment, Image, Room } = require('../models');
const { Op } = require('sequelize');
const router = express.Router();
const jwt = require('jsonwebtoken');

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
//LOAD MY INFO REQUEST
router.get('/', isLoggedIn, async (req, res, next) => {

    try {
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user },
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
                },{
                    model: Room,
                    as: 'participateRoom',
                    include : [{
                        model: User,
                        as: 'participants',
                        attributes:['id']
                    }]
                }
            ]
            });
            return res.status(200).send(fullUserWithoutPassword);

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

        res.status(201).send('ok');

    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/login', isNotLoggedIn, async(req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ where: { email : email }});

    if (user) {
        bcrypt.compare(password, user.password, async(err, result) => {
            if (result) {
                const token = jwt.sign({ id:user.id, email:user.email }, "secretkey", { expiresIn : '1h'});
                res.cookie('token', token, { httpOnly: true });

                try{
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

            } else {
                return res.status(404).send('아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.');
            }
        });
    } else {
        return res.status(404).send('아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.');
    }
})

router.post('/logout', isLoggedIn, (req, res) => {
    
    res.clearCookie('token');
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