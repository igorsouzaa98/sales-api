import express from "express";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Successfully connected to MongoDB!");
});

const app = express();
app.use(express.json());

export default app;
