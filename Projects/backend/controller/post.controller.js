const bcrypt = require("bcrypt");
const Post = require("./../models/post.models");
const jwt = require("jsonwebtoken");

exports.createPost = async (req, res) => {
  const { title, body, device } = req.body;
  let userID = req.user._id;
  console.log(userID);
  try {
    const newPost = await Post.create({
      title,
      body,
      device,
      userID,
    });

    return res.status(201).json({
      status: "success",
      message: newPost,
    });
  } catch (err) {
    return res.status(404).json({
      status: "error",
      error: err,
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const posts = await Post.find({});
    console.log("posts:", posts);

    return res.status(201).json({
      status: "success",
      message: posts,
    });
  } catch (err) {
    return res.status(404).json({
      status: "error",
      error: err,
    });
  }
};
