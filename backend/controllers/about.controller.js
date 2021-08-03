import asyncHandler from "express-async-handler";
import About from "../models/about.model.js";


// @desc    Update About Info
// @route   PUT /api/about/:entry
// @access  Private|Admin
const updateAbout = asyncHandler(async(req, res) => {
    // Get the data to update
    const entry = req.params.entry;
    const data = await About.findOne({ entry });
    // Get body from request
    const {
        about,
        profile,
        technology,
        education,
        programmingSkill,
        otherSkill,
        languageSkill,
        workExperience,
        activity,
        interest,
        certification,
    } = req.body;

    // Check if there is data
    if (data) {
        data.about = about || data.about;
        data.profile = profile || data.profile;
        data.technology = technology || data.technology;
        data.education = education || data.education;
        data.programmingSkill = programmingSkill || data.programmingSkill;
        data.otherSkill = otherSkill || data.otherSkill;
        data.languageSkill = languageSkill || data.languageSkill;
        data.workExperience = workExperience || data.workExperience;
        data.activity = activity || data.activity;
        data.interest = interest || data.interest;
        data.certification = certification || data.certification;

        // Save update or modifications
        const dataUpdated = await data.save();
        // Send the updates
        res.json({
            _id: dataUpdated._id,
            about: dataUpdated.about,
            profile: dataUpdated.profile,
            technology: dataUpdated.technology,
            education: dataUpdated.education,
            programmingSkill: dataUpdated.programmingSkill,
            otherSkill: dataUpdated.otherSkill,
            languageSkill: dataUpdated.languageSkill,
            workExperience: dataUpdated.workExperience,
            activity: dataUpdated.activity,
            interest: dataUpdated.interest,
            certification: dataUpdated.certification,
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

// @desc    Get about by entry
// @route   GET /api/about/:entry
// @access  Public
const getAboutByEntry = asyncHandler(async(req, res) => {
    // Request from Database
    const entry = req.params.entry;
    const about = await About.findOne({ entry });

    if (about) {
        res.json(about);
    } else {
        res.status(404);
        throw new Error('About content not found');
    }
});


export { updateAbout, getAbout, getAboutByEntry };