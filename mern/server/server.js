const express = require("express");
const mongoose = require("mongoose");
const { chats } = require("./data/data")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const chatRoutes = require("./routes/chatRoutes")
const messageRoutes = require("./routes/messageRoutes")
const { notFound } = require("./middleware/errorMiddleware")
const path = require("path");


const app = express();
dotenv.config();
connectDB();
// console.log(process.env.MONGO_URI);

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);
app.use("/api/message", messageRoutes);

//deployment
const __dirname1 = path.resolve();
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname1, "/client/build")));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"));
    });
} else {
    app.get("/", (req,res) => {
        res.send("API is running successfully")
    });
}

//deployment

app.use(notFound);
// app.use(errorHandler);


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server on PORT ${PORT}`));

const io = require('socket.io')(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {
    console.log('successfully connected to socket.io');
    //this part is so that each user has their own socket
    socket.on('setup', (userData) => {
        socket.join(userData._id); //create room for user
        // console.log(userData._id);
        socket.emit('connected');
    });

    socket.on('join chat', (room) => {
        socket.join(room);
        console.log("User Joined Room: " + room);
    });

    socket.on("typing", (room) => socket.in(room).emit("typing"));

    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));


    socket.on('new message', (newMessageReceived) => {
        var chat = newMessageReceived.chat;

        if (!chat.users) {
            return console.log('no users');
        }
        chat.users.forEach(user => {
            if (user._id == newMessageReceived.sender._id) {
                return;
            }
            //inside that user's room, send message
            socket.in(user._id).emit("message received", newMessageReceived)
        })
    })

    //disconnecting socket to save bandwidth
    socket.off("setup", () => {
        console.log("User Disconnected");
        socket.leave(userData._id);
    });
});