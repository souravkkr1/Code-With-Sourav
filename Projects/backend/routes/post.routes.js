const express = require("express");
const postController = require("./../controller/post.controller");
const authMiddleware = require("./../middleware/auth.middleware");

const router = express.Router();

router
  .route("")
  .post(authMiddleware.protect, postController.createPost)
  .get(authMiddleware.protect, postController.getPost);
module.exports = router;
