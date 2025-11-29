import mongoose, { Types } from "mongoose";

const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

},{timestamps: true })

const Contacts = new mongoose.model("Contacts", ContactSchema);


export default Contacts;
