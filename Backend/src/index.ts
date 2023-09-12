import "dotenv/config";
import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(cors({
    credentials: true,
}));

const PORT = process.env.PORT || 3000;

app.get('/ping', ( _req, res) => {
    console.log("PINGED");
    res.send("PONG")
});

app.listen(PORT, () => {
    console.log(`SERVIDOR EN PUERTO ${PORT}`)
})

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL!);
mongoose.connection.on('error', (error: Error) => console.log(error));
app.use('/', router());