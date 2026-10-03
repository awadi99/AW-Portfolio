import Contacts from "./contact.model.js";


export const createContact = async(data)=>{
    return await Contacts.create(data);
}
