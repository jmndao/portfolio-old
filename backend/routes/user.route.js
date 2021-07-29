import express from "express";
import { getUsers, registerUser, authUser, getUserById } from "../controllers/user.controller.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Registration Route
router.route('/').post(registerUser).get(protect, admin, getUsers);
// Log user
router.post('/login', authUser);
// Request User By Id
router.route('/:id').get(protect, admin, getUserById);

export default router;