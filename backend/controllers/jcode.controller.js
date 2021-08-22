import asyncHandler from "express-async-handler";
import JCode from "../models/jcode.model.js";



// @desc    POST new JCode
// @route   POST /api/jcodes
// @access  Private|Admin
const createJCode = asyncHandler(async(req, res) => {
    // Get data from request
    const {
        project,
        description,
        image,
        section,
        link,
        mention
    } = req.body;

    const createdJCode = await JCode.create({
        project,
        description,
        image,
        section,
        link,
        mention
    });
    if (createdJCode) {
        res.status(201).json(createdJCode);
    } else {
        res.status(400);
        throw new Error("JCode creation failed.");
    }
});

// @desc    Get a single JCode
// @route   GET /api/jcodes/:id 
// @access  Public
const getJCode = asyncHandler(async(req, res) => {
    // Find the JCode by ID
    const jcode = await JCode.findById(req.params.id);
    if (jcode) {
        res.json(jcode);
    } else {
        res.status(404);
        throw new Error("JCode not found.");
    }
});

// @desc    Delete a JCode
// @route   DELETE /api/jcodes/:id
// @access  Private|Admin
const deleteJCode = asyncHandler(async(req, res) => {
    // Find the jcode
    const jcode = await JCode.findById(req.params.id);

    if (jcode) {
        await jcode.remove();
        res.json({ message: "JCode deleted successfully. " });
    } else {
        res.status(404);
        throw new Error('JCode not found.');
    }
});

// @desc    Update a JCode
// @route   PUT /api/jcodes/:id
// @access  Private|Admin
const updateJCode = asyncHandler(async(req, res) => {
    // Collect new data from req
    const {
        project,
        description,
        image,
        section,
        link,
        mention
    } = req.body;
    // Find the jcode to update
    const jcode = await JCode.findById(req.params.id);

    if (jcode) {
        jcode.project = project || jcode.project;
        jcode.description = description || jcode.description;
        jcode.image = image || jcode.image;
        jcode.section = section || jcode.section;
        jcode.link = link || jcode.link;
        jcode.mention = mention || jcode.mention;
        // Save the update
        const updatedJCode = await jcode.save();
        // Send the updatedJCode
        res.json(updatedJCode);
    } else {
        res.status(404);
        throw new Error('JCode not found.');
    }
});

// @desc    Get all JCodes
// @route   GET /api/jcodes
// @access  Public
const getJCodes = asyncHandler(async(req, res) => {
    // Request all JCodes
    const jcodes = await JCode.find({});
    res.send(jcodes);
});


export { updateJCode, getJCode, deleteJCode, createJCode, getJCodes }