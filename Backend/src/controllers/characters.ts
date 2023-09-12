import express from 'express';
import { getCharacterByUserId } from '../db/personajes';

export const getAllCharactersFromUserId = async (req: express.Request, res: express.Response) => {
    try {
        const { userId } = req.body;

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