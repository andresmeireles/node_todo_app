import mongoose from 'mongoose';

const connectDB = async (connectionString: string) => {
  mongoose
    .connect(connectionString)
    .then(() => console.log('connect to the db...'))
    .catch(err => console.log(err));
};

export default connectDB;
