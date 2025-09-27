const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;