import mongoose from "mongoose";

const defaultCharacterSchema = new mongoose.Schema({    
    name: { type: String },
    headId: { type: Number },
});

export const DefaultCharacterModel = mongoose.model("DefaultCharacter", defaultCharacterSchema);
export const getDefaultCharacters = () => DefaultCharacterModel.find();