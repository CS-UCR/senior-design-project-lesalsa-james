const expressAsyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const { UserRefreshClient } = require("google-auth-library");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = expressAsyncHandler(async (req,res) => {
    const {name, email, password} = req.body;

    if (!name || !password || !email) {
        res.status(400);
        throw new Error ("Enter all the fields");
    }

    const userExists = await User.findOne({email});
    if (userExists){
        res.status(400);
        throw new Error("Email already in use");
    }

    const user = await User.create({
        name,
        email,
        password
    });
    if (user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            token:generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Error Creating User")
    }
});

const authUser = expressAsyncHandler(async(req,res)=> {
    const{email,password} = req.body;

    const user = await User.findOne({email});
    
    if (user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email:user.email,
            token:generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Password or Email");
    }
})


module.exports={registerUser, authUser}