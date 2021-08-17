import express from "express";
import { protect, admin } from "../middlewares/authMiddleware.js";
import {
    createProject,
    deleteProject,
    getProjectDetail,
    getProjects,
    updateProject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.route("/").get(getProjects).post(protect, admin, createProject);
router
    .route("/:id")
    .get(protect, admin, getProjectDetail)
    .put(protect, admin, updateProject)
    .delete(protect, admin, deleteProject);


export default router;