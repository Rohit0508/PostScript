const express = require("express");
const router = express.Router();

const {signup,login,saveinfo,getdetails} = require("../Controllers/Auth");


router.post("/login", login);
router.post("/signup", signup);
router.put("/profile/:id",saveinfo);
router.get("/profile/:id",getdetails);

module.exports = router;