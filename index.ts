import express from 'express';
import dotenv from 'dotenv';
import tasksRoutes from './routes/tasks';
import connectDB from './src/db/connection';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.static('./public'));

app.use(express.json());

app.get('/', (req, res) => res.end());

// routes
app.use('/api/v1/tasks', tasksRoutes);

const start = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('no variable with name MONGO_URL');
    }
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => console.log(`listen to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
