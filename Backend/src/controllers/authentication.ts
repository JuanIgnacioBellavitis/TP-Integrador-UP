import express from 'express';
import { createUser, getUserByEmail } from '../db/usuarios';
import { random , authenticationHelper} from '../helpers'

export const register = async(req: express.Request, res: express.Response) => {
    try {        
        const { username, password } = req.body;     
        if (!username || !password) return res.sendStatus(400);

        const existUser = await getUserByEmail(username);

        if (existUser) return res.sendStatus(404);

        const salt = random();
        const user = await createUser({
            username,
            authentication: {
                salt, 
                password: authenticationHelper(salt, password),
            },
        });

        return res.status(200).json(user).end();

    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
}