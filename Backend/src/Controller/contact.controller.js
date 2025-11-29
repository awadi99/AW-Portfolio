import Contacts from "../model/contact.js"

export const getContacts = async(req,res)=>{
    const {name , email, message}= req.body;
    try{
        if(!name || !email || !message)
        {
            return res.status(400).json({msg:"Please Provide vaild Informations"});
        }
        const emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        if(!emailRegex.test(email))
        {
            return res.status(400).json({msg:"Please Provide vaild Email"});
        }
        
        const info = new Contacts({
            name,
            email,
            message
        });

        const value =  await info.save();
            res.status(201).json({msg:"Message Sent Successful"});

    }
    catch(error){
        console.error(error)
        res.status(500).json({msg:"Internal Server Error"});
    }
} 

