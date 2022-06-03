import mongoose from 'mongoose';

const connection = (mongoDatabaseURI = 'mongodb://localhost:27017/Cookmaster') => mongoose.connect(mongoDatabaseURI);

export default connection;
