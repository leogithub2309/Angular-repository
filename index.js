import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { queryDatabase } from './controllers/controllersTarjetas.js';

const app = express(),
    port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", queryDatabase.mainRoute);
app.post("/crearTarjeta", queryDatabase.createTarjeta);
app.get("/tarjetas", queryDatabase.getAllTarjetas);

app.listen(port, () => {
    console.log(`El servidor se está ejecutando en el http://localhost:${port}/`);
});