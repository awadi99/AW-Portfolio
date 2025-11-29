import mongoose, { Types } from "mongoose";

const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate: {
            validator: function(v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(v);
            },
            message: 'Please enter a valid email address'
        }
    },    message:{
        type:String,
        required:true
    }

},{timestamps: true })

const Contacts = mongoose.model("Contacts", ContactSchema);

export default Contacts;
