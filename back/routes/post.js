const express = require('express');
const router = express.Router();
const { Post } = require('../models');

//req.body.content == text
router.post('/', async (req, res, next)=>{
    
    try{
        const post = await Post.create({
            content: req.body.content,
            UserId : req.user.id
        });
    
        return res.status(201).send(post);
    } catch (error) {
        console.log(error);
        next(error);
    }

});




module.exports = router;