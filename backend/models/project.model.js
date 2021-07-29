import mongoose from "mongoose";


const projectSchema = mongoose.Schema({

    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    private: { type: Boolean, default: false },
    doneAt: { type: Date },
    description: { type: String, required: true },
    forkLink: { type: String, required: true },
    githubLink: { type: String, required: true },
    website: { type: String },
    participant: [{
        name: { type: String, required: true },
        pseudo: { type: String, required: true },
        image: { type: String, required: true },
        website: { type: String }
    }]
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);


export default Project;