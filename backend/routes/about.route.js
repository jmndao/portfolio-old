import express from "express";
import { getAbout, updateAbout, getAboutByEntry } from "../controllers/about.controller.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/', getAbout);
router.get('/:entry', getAboutByEntry);
router.route('/:entry').put(protect, admin, updateAbout);


export default router;