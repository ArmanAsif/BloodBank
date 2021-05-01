import asyncHandler from "express-async-handler";
import Post from "../models/postModel.js";

// @desc    Create new post
// @route   POST /api/posts
// @access  Private
const addRequestPost = asyncHandler(async (req, res) => {
  const { alternateMobile, relationship, requestBloodGroup, time } = req.body;

  const post = new Post({
    user: req.user._id,
    alternateMobile,
    relationship,
    requestBloodGroup,
    time,
  });

  const createdPost = await post.save();

  res.status(201).json(createdPost);
});

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).populate(
    "user",
    "id name mobile email bloodGroup address city postalCode dateOfBirth numberOfDonation"
  );
  res.json(posts);
});

// @desc    Fetch single post
// @route   GET /api/posts/:id
// @access  Private/Admin
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id).populate(
    "user",
    "id name mobile email bloodGroup address city postalCode dateOfBirth numberOfDonation"
  );

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// @desc    Update donation date
// @route   PUT /api/posts/:id/review
// @access  Private/Admin
const updateDonationDate = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    post.donationDate = req.body.donationDate;
    post.isReview = true;

    const updatedPost = await post.save();

    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// @desc    Update post manage
// @route   PUT /api/posts/:id/manage
// @access  Private
const updatePostManage = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    post.isManage = true;
    const updatedPost = await post.save();

    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

export {
  addRequestPost,
  getPosts,
  getPostById,
  updateDonationDate,
  updatePostManage,
};
