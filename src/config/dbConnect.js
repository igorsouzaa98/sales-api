import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI);

let db = mongoose.connection;

export default db;
