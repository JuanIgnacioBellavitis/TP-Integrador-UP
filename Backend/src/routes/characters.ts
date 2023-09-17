import  express  from "express";
import { CreateCharacter, GetCharacterById, UpdateCharacter, getAllCharactersFromUserId } from "../controllers/characters";

export default (router: express.Router) => {
    router.get('/characters', getAllCharactersFromUserId);
    router.get('/characterById', GetCharacterById);
    router.post('/characters/create', CreateCharacter);
    router.post('/character/:id', UpdateCharacter)
}