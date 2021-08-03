import mongoose from "mongoose";

const jCodeSchema = mongoose.Schema({

    title: { type: String, required: true },
    mode: { type: String, required: true },
    text: { type: String, required: true },
    code: { type: String, required: true },
    links: [{
        url: { type: String, required: true },
        video: { type: Boolean, default: false }
    }]

}, { timestamps: true });

const JCode = mongoose.Model('JCode', jCodeSchema);

export default JCode;