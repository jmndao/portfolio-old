import path from "path";
import asyncHandler from "express-async-handler";

// @desc    Download PDF (My Resume)
// @route   GET /api/download/resume
// @access  Public
const downloadResume = asyncHandler(async(req, res) => {
    __dirname = path.resolve();
    // Send the resume
    res.download(__dirname + "backend/uploads/Resume.pdf", () => {
        if (err) {
            console.error("An unexpected Error occured: " + err)
        } else {
            console.log("File successfully downloaded. ");
        }
    });
});


export { downloadResume };