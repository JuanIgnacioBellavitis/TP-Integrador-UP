import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({    
    userId: {type: String},
    characterName: { type: String },
    headId: { type: Number },
    tshirtId: { type: Number },
    pantsId: { type: Number },
    shoesId: { type: Number },
});

export const CharacterModel = mongoose.model("Character", characterSchema);

export const getCharacterByUserId = (userId: string) => CharacterModel.find({userId});
export const createCharacter = (values: Record<string, any>) => new CharacterModel(values).save().then((character) => character.toObject());
export const getCharacterById = (id: string) => CharacterModel.findById(id);
export const updateCharacter = (id: string, values: Record<string,any>) => CharacterModel.findByIdAndUpdate(id, values);