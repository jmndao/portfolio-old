import express from "express";
import { downloadResume } from "../controllers/home.controller.js";

const router = express.Router();

router.route("/resume").get(downloadResume);

export default router;