const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User, Post } = require('../models');

const router = express.Router();

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


module.exports = router;