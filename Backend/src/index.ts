import express from 'express';
import personajeRouter from './routes/personajes';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/ping', ( _req, res) => {
    console.log("PINGED");
    res.send("PONG")
});

app.use('/api/personajes', personajeRouter);

app.listen(PORT, () => {
    console.log(`SERVIDOR EN PUERTO ${PORT}`)
})