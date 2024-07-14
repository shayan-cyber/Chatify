
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import routes from './routes/index.js';
import path from 'path';

const app = express();
app.use(cors());

connectDB();
app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json());


app.use('/api', routes);

export default app;
