const express = require('express');
const router = express.Router();
const { Post, Comment, Image, Hashtag, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

//req.body.content == text
router.post('/', async (req, res, next)=>{
    
    try{
        const post = await Post.create({
            content: req.body.content,
            UserId : req.user.id
        });

        const fullPost = await Post.findOne({
            where: { id : post.id },
            include : [{ //eager loading
                model: User,
                attributes:  [ 'id', 'nickname' ] //조인한 테이블의 attribute
            },{
                model: Image
            },{
                model: Comment,
                include : [{
                    model: User,
                    attributes: ['id', 'nickname']
                }]
            },{
                model: Hashtag
            },{
                model: User,
                as: 'Likers'
            },{
                model: Post,
                as: 'Retweet'
            }]
        });

        return res.status(201).send(fullPost);
        
    } catch (error) {
        console.log(error);
        next(error);
    }

});

router.post('/:postId/comment', isLoggedIn, async (req, res, next)=>{
    
    try{
        const post = await Post.findOne({
            where: { id : req.params.postId },
        });
        if (!post){
            return res.status(404).send('존재하지 않는 게시글입니다');
        }
        
        const comment = await Comment.create({
            content:req.body.content,
            UserId:req.body.userId,
            PostId:req.params.postId
        });
        //create시에는 정보가 부족하니까 다른 테이블과 조인하여 정보 가져온다.
        const fullComment = await Comment.findOne({
            where: { id : comment.id },
            include : [{ //eager loading
                model: User,
                attributes:  [ 'id', 'nickname' ] //조인한 테이블의 attribute
            }]
        });
        console.log(fullComment);
        return res.status(201).send(fullComment);
    }catch(error){
        console.error(error);
        next(error);
    }

});


module.exports = router;