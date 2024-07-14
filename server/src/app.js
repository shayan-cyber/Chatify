
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import routes from './routes/index.js';

const app = express();
app.use(cors());

connectDB();


app.use(bodyParser.json());


app.use('/api', routes);

export default app;
