import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({    
    userId: {type: String},
    characterName: { type: String },
    headId: { id: Number },
    tshirtId: { id: Number },
    pantsId: { id: Number },
    shoesId: { id: Number },
});

export const characterModel = mongoose.model("Character", characterSchema);

export const getCharacterByUserId = (userId: string) => characterModel.find({userId});