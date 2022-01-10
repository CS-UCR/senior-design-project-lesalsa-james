const express = require("express");
const mongoose = require("mongoose");
const { chats } = require("./data/data")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
connectDB();
// console.log(process.env.MONGO_URI);

app.get("/", (req,res) => {
    res.send("API is running successfully")
});

app.get("/api/chat", (req,res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req,res) => {
    console.log(req);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server on PORT ${PORT}`));