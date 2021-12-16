const express = require('express');
const { isLoggedIn } = require('./middlewares');
const router = express.Router();
const { Post, Comment, Image, Hashtag, User } = require('../models');
const { Op } = require('sequelize');

//`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`
router.get('/:tag', async (req ,res ,next)=>{
    try{
        const where = {};
        if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐때, 스크롤시 게시글 불러오기
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
        }
        const posts = await Post.findAll({
            where,
            limit: 10,
            order: [['createdAt', 'DESC']],
            include: [{
                model: Hashtag,
                where: { name: decodeURIComponent(req.params.tag)}
            },{
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
        
        res.status(200).send(posts);
    } catch (err){
        console.error(err);
        next(err);
    }
});


module.exports = router;