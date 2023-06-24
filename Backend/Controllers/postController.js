
const Post = require("../models/postModel");

// to create a new post ********************
exports.createPost = async (req,res) => {
    try{
            const {title, content,category,userId,username} = req.body;
            const post = new Post({
                title,content, category,userId,username
            });
            const savedPost = await post.save();

            res.json({
                post:savedPost,
                success:true
            });
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
};


// //need some more testing after completing like wala controleer
// exports.getAllPosts = async (req,res) => {
//     try {
//         const posts = await Post.find().populate("likes").populate("comments").exec();
//         res.json({
//             posts,
//         })
//     }
//     catch(error) {
//         return res.status(400).json({
//             error: "Error while fetching post",
//         });
//     }
// }

exports.getpost=async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
  
    // Calculate the offset based on the page number
    console.log(page,pageSize);
    const offset = (page - 1) * pageSize;
    let result =await Post.find({}).skip(offset).limit(pageSize);
    const totalCount = await Post.countDocuments();
    if(result){
         // Construct the response object
  const responseData = {
    data: result,
    currentPage: page,
    totalblogs:totalCount,
    totalPages: Math.ceil(totalCount / pageSize)
  };

  // Send the response as JSON
  res.json(responseData);
    }
    else
   {
    res.send("no data in db");
   }
}