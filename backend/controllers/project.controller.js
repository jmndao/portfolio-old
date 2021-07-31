import asyncHandler from "express-async-handler";
import Project from "../models/project.model.js";

// @desc    GET all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async(req, res) => {
    // Request all projects from db
    const projects = await Project.find({});
    res.json(projects);
});

// @desc    GET Details of a project
// @route   GET /api/projects/:id
// @access  Private|Admin
const getProjectDetail = asyncHandler(async(req, res) => {
    // Get the project by id
    const project = await Project.findById(req.params.id);

    // Check if project exist
    if (project) {
        res.json(project);
    } else {
        res.status(404);
        throw new Error("Project not found.");
    }
});

// @desc    Update a project info
// @route   PUT /api/projects/:id
// @access  Private|Admin
const updateProject = asyncHandler(async(req, res) => {
    // Destructure the body request
    const {
        name,
        image,
        description,
        private: pPrivate,
        doneAt,
        forkLink,
        githubLink,
        website,
        participant,
    } = req.body;
    // Get the project to update by id
    const project = await Project.findById(req.params.id);

    // check if the project exist
    if (project) {
        // Then update
        project.name = name || project.name;
        project.image = image || project.image;
        project.description = description || project.description;
        project.doneAt = doneAt || project.doneAt;
        project.forkLink = forkLink || project.forkLink;
        project.githubLink = githubLink || project.githubLink;
        project.website = website || project.website;
        project.participant = participant || project.participant;

        if (pPrivate !== null) {
            if (pPrivate !== project.private) project.private = pPrivate;
        }
        // Save the updated info
        const updatedProject = await project.save();

        // Send a successfull update status and the new project info
        res.status(201).json(updatedProject);
    } else {
        res.status(404);
        throw new Error("Project does not exist.");
    }
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private|Admin
const deleteProject = asyncHandler(async(req, res) => {
    // Get the project to delete
    const project = await Project.findById(req.params.id);

    // check if project
    if (project) {
        await project.remove();
        res.status(201).json({ message: "Project removed" });
    } else {
        res.status(404);
        throw new Error("Project does not exist.");
    }
});

export { getProjects, getProjectDetail, updateProject, deleteProject };