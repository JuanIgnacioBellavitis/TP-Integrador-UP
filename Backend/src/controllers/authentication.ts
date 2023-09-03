import express from 'express';
import { createUser, getUserByUsername } from '../db/usuarios';
import { random , authenticationHelper} from '../helpers';

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.sendStatus(404);

        const user = await getUserByUsername(username).select('+authentication.salt +authentication.password');

        if (!user) return res.sendStatus(404);

        const expectedHash = authenticationHelper(user.authentication?.salt!, password);

        if (user.authentication?.password !== expectedHash) return res.sendStatus(403);

        const salt = random();

        user.authentication.sessionToken = authenticationHelper(salt, user._id.toString());

        await user.save();

        res.cookie('TP-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/'});

        return res.status(200).json(user).end();
    } catch (error) {
        console.log("Error: ", error);
        return res.sendStatus(400);
    }
}

export const register = async(req: express.Request, res: express.Response) => {
    try {        
        const { username, password } = req.body; 
        if (!username || !password) return res.sendStatus(400);

        const existUser = await getUserByUsername(username);

        if (existUser) return res.sendStatus(400);

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