import express  from "express";
import { merge } from 'lodash';
import { getUserBySessionToken } from "../db/usuarios";

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {        
        if (!req.cookies || !req.cookies.hasOwnProperty('TP-AUTH')) {
            return res.sendStatus(403);
        }
        
        const sessionToken = req.cookies['TP-AUTH'];        

        if(!sessionToken) {
            return res.sendStatus(403);
        }

        const existingUser = await getUserBySessionToken(sessionToken);

        if(!existingUser) {
            return res.sendStatus(403);
        }

        merge(req, {identity: existingUser});

        return next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}