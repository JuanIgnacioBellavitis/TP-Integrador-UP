import  express  from "express";
import { CreateCharacter, GetCharacterById, UpdateCharacter, getAllDefaultCharacters, getAllCharactersFromUserId } from "../controllers/characters";

export default (router: express.Router) => {
    router.get('/defaultCharacters', getAllDefaultCharacters)
    router.get('/characters', getAllCharactersFromUserId);
    router.get('/characterById', GetCharacterById);
    router.post('/characters/create', CreateCharacter);
    router.post('/character/:id', UpdateCharacter)
}