import {Request, Response} from 'express';
import { createCharacter, getCharacterById, getCharacterByUserId, getCharacters } from '../db/personajes';
import { getDefaultCharacters } from '../db/defaultCharacters';

export const getAllDefaultCharacters = async (_req: Request, res: Response) => {
    try {
        const defaultCharacters = await getDefaultCharacters();
        
        return res.status(200).json(defaultCharacters).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getAllCharacters = async (_req: Request, res: Response) => {
    try {
        const characters = await getCharacters();
        
        return res.status(200).json(characters);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getAllCharactersFromUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        const characters = await getCharacterByUserId(userId);                

        if (!characters) {
            return res.sendStatus(403);
        }        

        return res.status(200).json(characters);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const CreateCharacter = async (req: Request, res: Response) => {
    try {
        const { headId, tshirtId, pantsId, shoesId, userId, characterName } = req.body;   // TODO: QUITAR CHARACTERNAME CUANDO EL USUARIO PUEDA ELEGIR EL PERSONAJE              

        const character = await createCharacter({
            userId,
            characterName, // TODO --> CUANDO HAYA FRONT QUITAR DEL BODY Y QUE SE MANDE CON EL PJ QUE HAYA SELECCIONADO EL USUSARIO
            headId,
            tshirtId,
            pantsId,
            shoesId
        });
        
        return res.status(200).json(character).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const GetCharacterById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        const character = await getCharacterById(id);
        
        if (!character) {            
            return res.sendStatus(403);
        }

        return res.status(200).json(character);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const UpdateCharacter = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const {headId, tshirtId, pantsId, shoesId } = req.body;

        const character= await getCharacterById(id);

        if (!character) {
            return res.sendStatus(403);
        }

        character.headId = headId;
        character.tshirtId = tshirtId;
        character.pantsId = pantsId;
        character.shoesId = shoesId;        
        await character.save();

        return res.status(200).json(character).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}