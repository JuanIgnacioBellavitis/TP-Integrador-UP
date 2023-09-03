import "dotenv/config";
import express from 'express';
import personajeRouter from './routes/personajes';
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
}));

const PORT = process.env.PORT || 3000;

app.get('/ping', ( _req, res) => {
    console.log("PINGED");
    res.send("PONG")
});

app.use('/api/personajes', personajeRouter);

app.listen(PORT, () => {
    console.log(`SERVIDOR EN PUERTO ${PORT}`)
})

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL!);
mongoose.connection.on('error', (error: Error) => console.log(error));
app.use('/', router());