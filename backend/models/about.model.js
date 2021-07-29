import mongoose from "mongoose";


const aboutSchema = mongoose.Schema({
    profile: { type: String, required: true },
    education: [{
        school: { type: String, required: true },
        fromYear: { type: Date },
        toYear: { type: Date },
        description: { type: String, required: true }
    }],
    programmingSkill: [{
        language: { type: String, required: true },
        description: { type: String, required: true }
    }],
    languageSkill: [{
        language: { type: String, required: true },
        level: { type: String, required: true },
        levelRate: { type: Number, required: true, default: 2 }
    }],
    workExperience: [{
        enterpriseName: { type: String, required: true },
        position: { type: String, required: true },
        Duration: { type: Number, default: 0 },
        website: { type: String, required: true }
    }],
    activity: [{
        name: { type: String, required: true }
    }]
}, { timestamps: true });


const About = mongoose.model('About', aboutSchema);

export default About;