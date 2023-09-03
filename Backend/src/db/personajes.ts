import mongoose from "mongoose";

const personajeSchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    face: { id: Number }
})