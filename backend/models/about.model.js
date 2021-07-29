import mongoose from "mongoose";


const aboutSchema = mongoose.Schema({
    about: { type: String, required: true },
    profile: { type: String, required: true },
    education: [{
        school: { type: String, required: true },
        fromYear: { type: String },
        toYear: { type: String },
        description: { type: String, required: true }
    }],
    programmingSkill: [{
        language: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true }
    }],
    languageSkill: [{
        flag: { type: String, required: true },
        level: { type: String, required: true },
        levelRate: { type: Number, required: true, default: 2 }
    }],
    workExperience: [{
        enterpriseName: { type: String, required: true },
        position: { type: String, required: true },
        duration: { type: Number, default: 0 },
        website: { type: String, required: true }
    }],
    activity: [{
        name: { type: String, required: true }
    }]
}, { timestamps: true });


const About = mongoose.model('About', aboutSchema);

export default About;