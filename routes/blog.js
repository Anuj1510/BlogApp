const express = require("express")
const router = express.Router()


// import controller
const {dummyLink,likePost,unlikePost} = require("../controllers/LikeController")
const {createPost} = require("../controllers/PostController")
const {createComment} = require("../controllers/CommentController")
const {getAllPosts} = require("../controllers/PostController")



// mapping create
router.post("/comments/create",createComment)
router.post("/posts/create",createPost)
router.get("/dummyroute",dummyLink)
router.get("/posts",getAllPosts)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)


//export
module.exports = router