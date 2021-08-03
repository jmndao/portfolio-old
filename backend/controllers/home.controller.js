import path from "path";
import asyncHandler from "express-async-handler";

// @desc    Download PDF (My Resume)
// @route   GET /api/download/resume
// @access  Public
const downloadResume = asyncHandler(async(req, res) => {

    res.download('backend/uploads/Resume.pdf');
});


export { downloadResume };