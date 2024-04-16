import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Please provide a email"],
        unique: [true,"Username already exists"]
    },
    password:{
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified:{
        type: Boolean,
        default: FontFaceSetLoadEvent
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.model.users || mongoose.model("users, userSchema")

export default User;  