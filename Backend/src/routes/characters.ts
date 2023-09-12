import  express  from "express";
import { getAllCharactersFromUserId } from "../controllers/characters";

export default (router: express.Router) => {
    router.get('/characters', getAllCharactersFromUserId);
}