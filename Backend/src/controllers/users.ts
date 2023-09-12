import express from 'express';

import { getUserByUsername, getUsers } from '../db/usuarios';

export const getAllUsers = async (_req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();
        
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getUser = async (req: express.Request, res: express.Response) => {
    try {
        const { username } = req.body;

        const user = await getUserByUsername(username);

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}