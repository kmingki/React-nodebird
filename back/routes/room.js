const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('./middlewares');
const { Room, User } = require('../models');

router.post('/', isLoggedIn, async (req, res, next) => {
    try {
        var users = req.body.users;
        users.push(req.user.id.toString());
        users = await Promise.all(users.map((u) => User.findOne({
            where: {
                id: parseInt(u, 10)
            }
        }))); //[[노드, true],[리액트, true]]

        //이름만 있는 배열로
        var userName = users.map(u=>{
            
            return u.nickname;
        })

        //배열.join(', ') '이름, 이름, 이름, 이름'
        userName = userName.join(', ');

        const newRoom = await Room.create({
            title: userName,
            UserId: req.user.id,
        });

        //users에 있는 유저들을 room에 add 시켜야
        await Promise.all(users.map(u=> newRoom.addParticipants(u.id)));

        const io = req.app.get('io');
        io.of('/room').emit('newRoom', newRoom);

        return res.status(201).send(null);
        /*
        const newRoom = await Room.create({
            title: ,
            UserId: req.user.id,
        });
        */
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;