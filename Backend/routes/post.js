const express = require("express");
const router = express.Router();
const app=express();
const {createPost ,getpost} = require("../Controllers/postController");


router.post("/write", createPost);
router.get("/blogs",getpost);

module.exports = router;