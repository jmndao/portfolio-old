import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";


// @desc    Register a new User
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
    // Grab body Request
    const { name, email, password } = req.body;
    // Check if user already exist 
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error('A user with email already exists.');
    }
    // Create the new user
    const newUser = await User.create({
        name,
        email,
        password
    });

    if (newUser) {
        res.status.json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data.');
    }
});

// @desc    Auth user & Get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async(req, res) => {
    // Grab body Request
    const { email, password } = req.body;
    // Request user in DB
    const user = await User.find({ email });
    // Check if user exist and is valid
    if (user && user.comparePassword(password)) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid Email or Password.');
    }
});


// @desc    Get all users
// @route   /api/users
// @access  Private|Admin
const getUsers = asyncHandler(async(req, res) => {
    // Request to DB all users
    const users = await User.find({});
    // Send response in JSON format
    res.json(users);
});


// @desc    Get User by Id
// @route   /api/users/:id
// @access  Private|Admin
const getUserById = asyncHandler(async(req, res) => {
    // Get user by the id with the req.params
    const user = await User.findById(req.params.id).select('-password');

    // Check if user is there and valid id
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error('User not found.');
    }
});



export { registerUser, authUser, getUsers, getUserById };