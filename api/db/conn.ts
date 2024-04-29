import env from "../src/util/validateEnv";
import mongoose from "mongoose";

const mongoUri = env.MONGO_DB_URI;

mongoose.connect(mongoUri);

const db = mongoose.connection;

export default db;
