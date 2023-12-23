import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    rePassword:String,
    phone:Number,
    address:String,
    doctorName:String
   
})

export const hospitalModel = mongoose.model('hospital',hospitalSchema)