import express from "express";
import {
    submitForm,
    getContacts,
    getSingleContact,
    deleteContact,
} from "../controllers/contact.controller.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(submitForm).get(protect, admin, getContacts);
router
    .route("/:id")
    .get(protect, admin, getSingleContact)
    .delete(protect, admin, deleteContact);

export default router;