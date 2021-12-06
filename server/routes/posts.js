const express = require("express");

const router = express.Router();

const {
   
    addPost,
    getPostByName,
    getPostByTeeTime,
    getPostByGolfCourse,
} = require("../handlers");

/////////////////////////////////////////////////////////////////////////////



// add new post to db 
router.post("/api/posts", addPost);

//get all posts
router.get("/api/posts", getUser);

//get posts by name 
router.get("/api/posts/:name", getPostByName);

//get posts by name 
router.get("/api/posts/:teeTime", getPostByTeeTime);

//get posts by golfCourse 
router.get("/api/posts/:golfCourse", getPostByGolfCourse);







module.exports = router;