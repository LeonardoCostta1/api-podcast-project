import express from "express";

import cors from 'cors'

import mongoose from 'mongoose'

const app = express();

app.use(cors())

app.use(express.json())

import routes from './routes/index.js'

mongoose.connect('mongodb+srv://leonardo:Vemqtem2014@cluster0.tkdmzxk.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}); 

app.use('/api',routes)

export default app;
