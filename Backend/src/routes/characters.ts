import  express  from "express";
import { CreateCharacter, GetCharacterById, UpdateCharacter, getAllDefaultCharacters, getAllCharactersFromUserId, getAllCharacters } from "../controllers/characters";

export default (router: express.Router) => {
    router.get('/characters', getAllCharacters)
    router.get('/defaultCharacters', getAllDefaultCharacters)
    router.get('/charactersFromUserId/:userId', getAllCharactersFromUserId);
    router.get('/characterById/:id', GetCharacterById);
    router.post('/characters/create', CreateCharacter);
    router.post('/character/update/:id', UpdateCharacter)
}