const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    game:{type:String, required:false},
    rank:{type:String, required:false},
    playstyle:{type:String, required:false},
    numPlayers:{type:String, required:false},
    //pic: {type:}
},

    {
        timestamps: true
    }
);

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}
 
userSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next()
    }
//encrypt password before saving user to database
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});


const User = mongoose.model("User", userSchema);

module.exports= User;