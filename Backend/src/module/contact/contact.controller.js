import { createContactCon } from "./contact.service.js";


export const createContactOne = async(req,res)=>{
    try {
            const contactOne = await createContactCon(req.body);
            res.status(200).json({
                _id:contactOne._id,
                name:contactOne.name,
                email:contactOne.email,
                message:contactOne.message,
            });
            return contactOne;
    } catch (error) {
        res.status(400).json({
            error,
            message:error.message
        });
    };
};