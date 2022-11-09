import mongoose from "mongoose";

const userschma = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
       },
       password:{
        type:String,
        required:true
       },
       mobile:{
        type:Number,
        required:true
       },
       token:{
        type:String,
        required:false
       },
       number_verfiy:{
        type:Boolean,
        required:false,
        default:false
    },
    otp:{
        type:Number,
        required:false
    }
 
})
const User = mongoose.model("sahil",userschma);

export default User;