import express from "express";
import { getAbout, updateAbout } from "../controllers/about.controller.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/', getAbout);
router.route('/:entry').put(protect, admin, updateAbout);


export default router;