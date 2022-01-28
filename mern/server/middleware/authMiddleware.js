const jwt = require("jsonwebtoken");
const User = require ("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req,res,next) => {
    let token;

    if (
        req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            //token: Bearer then token, splitting and taking token
            //decoding token id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded);

            //return it without password
            req.user = await User.findById(decoded.id).select("-password");
            next();

        } catch (error){
            res.status(401);
            throw new Error ("No authorization, token has failed");
        }
    }
    if (!token){
        res.status(401);
        throw new Error("Error no token");
    }
});
module.exports = { protect };