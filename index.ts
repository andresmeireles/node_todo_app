import express from 'express';
import dotenv from 'dotenv';
import homeRoute from './routes/home';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.static('./public'));

// routes
app.use('/', homeRoute);

app.listen(port, () => console.log(`listem to port ${port}`));