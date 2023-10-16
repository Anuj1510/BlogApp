const Post = require("../models/PostModel")

exports.createPost = async(req,res) =>{
    try{
        const {title,body} = req.body;
        const post = new Post({
            title,body,
        });
        const savedPost = await post.save();

        res.json({
            post:savedPost,
        });
    }
    catch(error){
        return res.status(400).json({
            error:"Error while creating post",
        });
    }
};

exports.getAllPosts = async(req,res) =>{
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();//populate mujhe pura detail de dega comment ka but agr populate nahi use kra to sirf id dega comment ka
        res.json({
            posts
        })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while fetching post",
        });
    }
}