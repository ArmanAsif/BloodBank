import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import Post from "../models/postModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      bloodGroup: user.bloodGroup,
      donationDate: user.donationDate,
      feedback: user.feedback,
      address: user.address,
      city: user.city,
      postalCode: user.postalCode,
      numberOfDonation: user.numberOfDonation,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    mobile,
    email,
    bloodGroup,
    religion,
    address,
    city,
    postalCode,
    weight,
    dateOfBirth,
    password,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    mobile,
    email,
    bloodGroup,
    religion,
    address,
    city,
    postalCode,
    weight,
    dateOfBirth,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      bloodGroup: user.bloodGroup,
      donationDate: user.donationDate,
      feedback: user.feedback,
      address: user.address,
      city: user.city,
      postalCode: user.postalCode,
      numberOfDonation: user.numberOfDonation,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Accept Request & Update User
// @route   PUT /api/users/:id/accept
// @access  Private
const acceptRequest = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const post = await Post.findById(req.params.id);

  if (user && post) {
    user.numberOfDonation = user.numberOfDonation + 1;
    user.donationDate = post.donationDate;
    const updatedUser = await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      bloodGroup: user.bloodGroup,
      donationDate: user.donationDate,
      feedback: user.feedback,
      address: user.address,
      city: user.city,
      postalCode: user.postalCode,
      numberOfDonation: user.numberOfDonation,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get all users reviews
// @route   GET /api/users/reviews
// @access  Private
const getUsersReview = asyncHandler(async (req, res) => {
  const users = await User.find({});

  const myUsers = new Array();
  users.map((user, index) =>
    myUsers.push({
      index,
      name: user.name,
      feedback: user.feedback,
    })
  );

  res.json(myUsers);
});

// @desc    Add feedback
// @route   PUT /api/users/:id/feedback
// @access  Private
const addFeedback = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.feedback = req.body.feedback;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      bloodGroup: updatedUser.bloodGroup,
      donationDate: updatedUser.donationDate,
      feedback: updatedUser.feedback,
      address: updatedUser.address,
      city: updatedUser.city,
      postalCode: updatedUser.postalCode,
      numberOfDonation: updatedUser.numberOfDonation,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password");

  res.json(users);
});


export {
  authUser,
  registerUser,
  getUsersReview,
  acceptRequest,
  addFeedback,
  getAllUsers,
};
