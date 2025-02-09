import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'



const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength:[3, "Name must contain at least 3 characters!"],
        maxLength:[32, "Name cannot be exceed 32 characters!"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email!"],

    },
    phone:{
        type: String,
        required: true,

    },
    avatar:{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    education:{
        type: String,
        required: true,

    },
    password:{
        type: String,
        required: true,
        minLength:[8, "Password must contain at least 8 characters!"],
        maxLength:[32, "Password cannot be exceed 32 characters!"],
        select: false,

    },
    createdOn:{
        type: Date,
        default: Date.now,
    },
});

userSchema.pre("save", async function(){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
});


userSchema.methods.comparePassword = async function(enterePassword){
    return await bcrypt.compare(enterePassword, this.password);
};

userSchema.methods.getJWTToken = function () {
    const secretKey = process.env.JWT_SECRET_KEY || "defaultSecretKey";
    const expiresIn = process.env.JWT_EXPIRES || "7d"; // Default to 7 days
    return jwt.sign({ id: this._id }, secretKey, { expiresIn });
};



export const User = mongoose.model("User", userSchema);