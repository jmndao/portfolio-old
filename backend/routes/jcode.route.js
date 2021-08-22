import express from "express";
import { protect, admin } from "../middlewares/authMiddleware.js";
import {
    createJCode,
    deleteJCode,
    getJCode,
    getJCodes,
    updateJCode,
} from "../controllers/jcode.controller.js";

const router = express.Router();

router.route("/").get(getJCodes).post(protect, admin, createJCode);
router.route("/:id")
    .get(getJCode)
    .delete(protect, admin, deleteJCode)
    .put(protect, admin, updateJCode);


export default router;