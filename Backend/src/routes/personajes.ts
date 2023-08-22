import  express  from "express";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Fetching Personajes');
});

router.post('/', (_req, res) => {
    res.send("Personaje Guardado");
})

export default router;