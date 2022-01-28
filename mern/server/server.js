const express = require("express");
const mongoose = require("mongoose");
const { chats } = require("./data/data")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const chatRoutes = require("./routes/chatRoutes")
const { notFound } = require("./middleware/errorMiddleware")


const app = express();
dotenv.config();
connectDB();
// console.log(process.env.MONGO_URI);

app.use(express.json());
app.get("/", (req,res) => {
    res.send("API is running successfully")
});

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes )

app.use(notFound);
// app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server on PORT ${PORT}`));