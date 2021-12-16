const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Post, Comment, Image, Hashtag, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            done(null, basename + '_' + new Date().getTime() + ext);
        },
    }),
    limits: { fileSize : 20 * 1024 * 1024},
});

try {
    fs.accessSync('uploads');
} catch (error) {
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}

router.post('/', isLoggedIn, upload.none(), async (req, res, next)=>{
    
    const hashtags = req.body.content.match(/#[^\s#]+/g);

    try{
        const post = await Post.create({
            content: req.body.content,
            UserId : req.user.id,
        });

        //findOrCreate 사용 : 이미 존재하는 해시태그는 생성하지않는다.
        if (hashtags) {
            const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
                where: {
                    name: tag.slice(1).toLowerCase()
                }
            }))); //[[노드, true],[리액트, true]]

            await post.addHashtags(result.map(v => v[0]));
        }
        if (req.body.image) {
            if (Array.isArray(req.body.image)) { //이미지를 여러 개 올리면 image : [제로초.png, 부기초.png]
                const images = await Promise.all(req.body.image.map((image)=> Image.create({ src : image, PostId: post.id })));
            } else { //이미지를 하나만 올리면 image: 제로초.png
                const image = await Image.create({ src: req.body.image, PostId: post.id });
            }
        }

        const fullPost = await Post.findOne({
            where: { id : post.id },
            include : [{ //eager loading
                model: User,
                attributes:  [ 'id', 'nickname' ] //조인한 테이블의 attribute
            },{
                model: Image,

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
                as: 'Likers',
                attributes: ['id']
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


router.post('/images', isLoggedIn, upload.array('image'), async(req, res, next) => {
    //console.log(req.files);
    res.json(req.files.map((v)=> v.filename));
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
        //console.log(fullComment);
        return res.status(201).send(fullComment);
    }catch(error){
        console.error(error);
        next(error);
    }

});

router.patch('/:postId/like', isLoggedIn, async (req, res, next)=>{
    
    try {
        const post = await Post.findOne({ where: { id : req.params.postId }});
        if ( !post ) {
            return res.status(403).send('존재하지 않는 게시글 입니다');
        }
        
        await post.addLikers(req.user.id);//객체 or id
        return res.json({ PostId: post.id, UserId: req.user.id });
    } catch (error) {
        console.error(error);
        next(error);
    }

});

router.patch('/:postId/unlike', isLoggedIn, async (req,res,next)=>{
    
    try{
        const post = await Post.findOne({ where: { id: req.params.postId }});

        if ( !post ) {
        return res.status(403).send('존재하지 않는 게시글 입니다');
        }

        const user = await User.findOne({ where: { id: req.user.id }});
        await post.removeLikers(user);
        return res.json({ PostId: post.id, UserId: req.user.id });

    } catch (err) {
        console.error(err);
        next(err);
    }
})

router.delete('/:postId', isLoggedIn, async(req, res, next)=>{ //delete(`/post/${data}`
    try {

        await Post.destroy({
            where: { id : req.params.postId, UserId: req.user.id }
        })

        return res.status(200).send({ postId: parseInt(req.params.postId, 10)});
    } catch (error) {
        console.error(error);
        next(error);
    } 
});

router.get('/:postId', async (req, res, next) => { //GET /post/1
    
    try {
        const post = await Post.findOne({ 
            where: { id : req.params.postId },
        });
    
        if (!post) {
            return res.status(404).send("존재하지 않는 게시글입니다.");
        }

        const fullPost = await Post.findOne({
            where: { id : post.id },
            include : [{
                model: Post,
                as: 'Retweet',
                include : [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image
                }]
            },{ 
                model: User,
                attributes:  [ 'id', 'nickname' ] 
            },{
                model: Image,

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
                as: 'Likers',
                attributes: ['id']
            }]
        });

        return res.status(200).json(fullPost);

    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/:postId/retweet', isLoggedIn, async (req, res, next)=>{
    
    try{
        const post = await Post.findOne({ 
            where: { id : req.params.postId },
            include: [{
                model: Post,
                as: 'Retweet',
            }],
        });
    
        if(!post) {
            return res.status(403).send("존재하지 않는 게시글입니다.");
        }
    
        if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)){
            return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
        }
    
        const retweetTargetId = post.RetweetId || post.id;
    
        const exPost = await Post.findOne({
            where:{
                UserId: req.user.id,
                RetweetId: retweetTargetId,
            },
        });
    
        if (exPost) {
            return res.status(403).send('이미 리트윗한 게시글 입니다.');
        }
    
        const retweet = await Post.create({
            UserId: req.user.id,
            content: 'retweet',
            RetweetId : retweetTargetId,
        });

        const retweetWithPrevPost = await Post.findOne({
            where: { id : retweet.id },
            include : [{
                model: Post,
                as: 'Retweet',
                include : [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image
                }]
            },{ 
                model: User,
                attributes:  [ 'id', 'nickname' ] 
            },{
                model: Image,

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
                as: 'Likers',
                attributes: ['id']
            }]
        });

        return res.status(201).send(retweetWithPrevPost);

    } catch (error) {
        console.error(error);
        next(error);
    }
    
    
});

module.exports = router;


/**
 * https://sequelize.org/master/class/lib/associations/belongs-to-many.js~BelongsToMany.html
 * add, remove ,,, 
 * All methods allow you to pass either a persisted instance, its primary key, or a mixture
 */