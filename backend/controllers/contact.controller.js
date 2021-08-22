import asyncHandler from "express-async-handler";
import Contact from "../models/contact.model.js";

// @desc    Post form data
// @route   POST /api/contact
// @access  Public
const submitForm = asyncHandler(async(req, res) => {
    // Get data from body
    const { name, email, message } = req.body;

    // create new record document in db
    const created = await Contact.create({ name, email, message });

    //Once done send success message
    if (created) {
        res.status(201).json({ message: "Form successfully submitted." });
    } else {
        res.status(400);
        throw new Error('Bad Request.');
    }
});


// @desc    Get Submitted Forms
// @route   GET /api/contact
// @access  Private|Admin
const getContacts = asyncHandler(async(req, res) => {

    // Get all forms
    const contacts = await Contact.find({});

    res.json(contacts);
});

// @desc    Get a single Contact
// @route   GET /api/contact/:id
// @access  Private|Admin
const getSingleContact = asyncHandler(async(req, res) => {

    // Get the contact form
    const contact = await Contact.findById(req.params.id);

    if (contact) {
        res.json(contact);
    } else {
        res.status(404);
        throw new Error('Contact Info not found.');
    }
});

// @desc    Delete a contact
// @route   GET /api/contact/:id
// @access  Private|Admin
const deleteContact = asyncHandler(async(req, res) => {
    // Get the contact to delete
    const contact = await Contact.findById(req.params.id);

    if (contact) {
        await contact.remove();
        res.status(201).json({ message: "Contact removed successfully." });
    } else {
        res.status(404);
        throw new Error("Contact not found.");
    }
})



export { submitForm, getSingleContact, getContacts, deleteContact };