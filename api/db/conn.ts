import env from "../src/util/validateEnv"
import mongoose from "mongoose";

const mongoUri = env.MONGO_URI;

mongoose.connect(mongoUri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connected to MongoDB");
});

export default db;
