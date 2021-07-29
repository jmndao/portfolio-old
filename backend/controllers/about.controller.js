import asyncHandler from "express-async-handler";
import About from "../models/about.model.js";


// @desc    Update About Info
// @route   PUT /api/about/:id
// @access  Private|Admin
const updateAbout = asyncHandler(async(req, res) => {
    // Get the data to update
    const data = await About.findById(req.params.id);
    // Get body from request
    const {
        about,
        profile,
        education,
        programmingSkill,
        languageSkill,
        workExperience,
        activity
    } = req.body;

    // Check if there is data
    if (data) {
        data.about = about || data.about;
        data.profile = profile || data.profile;
        data.education = education || data.education;
        data.programmingSkill = programmingSkill || data.programmingSkill;
        data.languageSkill = languageSkill || data.languageSkill;
        data.workExperience = workExperience || data.workExperience;
        data.activity = activity || data.activity;

        // Save update or modifications
        const dataUpdated = await data.save();
        // Send the updates
        res.json({
            _id: dataUpdated._id,
            about: dataUpdated.about,
            profile: dataUpdated.profile,
            education: dataUpdated.education,
            programmingSkill: dataUpdated.programmingSkill,
            languageSkill: dataUpdated.languageSkill,
            workExperience: dataUpdated.workExperience,
            activity: dataUpdated.activity
        });
    } else {
        res.status(404);
        throw new Error('About Info with this Id not found.');
    }
});

// @desc    Get about
// @route   GET /api/about
// @access  Public
const getAbout = asyncHandler(async(req, res) => {
    // Request from Database
    const about = await About.find({});
    res.json(about);
});


export { updateAbout, getAbout };