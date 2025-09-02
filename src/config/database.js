const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shivamthakur766793_db_user:7667937437@devtinder-cluster.gqyosn8.mongodb.net/DevTinder"
  );
};

module.exports = connectDB;

