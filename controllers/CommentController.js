// import the model
const Post = require("../models/PostModel")
const Comment = require("../models/CommentModel")

// define route handler

exports.createComment = async(req,res) => { // async isliye banaya taaki hamare process ko wait naa krna pade
    try{
        // fetch data from req body
        const {post,user,body} = req.body
        // create a current object
        const comment = new Comment({
            post,user,body
        })

        // save the new comment into the database
        const savedComment = await comment.save()

        // find the post by ID, add the new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("comments")// populate the comments array with comment documents or populate nahi karwaunga to sirf id aayegi aur populate karwane se pura detail aayega
        .exec()
        
        res.json({
            post:updatedPost
        })
    }
    catch(error){
        return res.status(500)
        .json({
            error:"Error while Creating comment"
        })
    }
}