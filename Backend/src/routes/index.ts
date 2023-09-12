import express from 'express';
import authenticationRoute from './authenticationRoute';
import usersRoute from './users';
import charactersRoute from './characters';

const router = express.Router();

export default(): express.Router => {
    authenticationRoute(router);
    usersRoute(router);
    charactersRoute(router);
    return router;
}