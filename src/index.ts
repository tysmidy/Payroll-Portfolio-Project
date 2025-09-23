import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import router from "./router";

//get our server up and running, confirm by log
const app = express();

// Allow Vite dev server (5173) instead of React default (3000)
app.use(cors({
  origin: ["http://127.0.0.1:5173", "http://localhost:5173", "http://localhost:5000"], // allow both forms
  methods: ["get", "post"],
credentials: true
}));

app.use(express.json());
app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});

//get server connected to db, error if not
const MONGO_URL = "mongodb+srv://tysmidy:Redred90_@portfoliopayroll.glosspo.mongodb.net/";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error : Error) =>
console.log(error))

app.use('/', router());