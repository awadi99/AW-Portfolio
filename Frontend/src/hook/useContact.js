import apiClient from '../api/apiClient.js';
import { useMutation } from "@tanstack/react-query";



export const useContact = ()=>{

    const createContact =  useMutation({
        mutationKey:['contact'],
        mutationFn:async(formData)=>{
            const {data} = await apiClient.post("/contact/message",formData)
            return data;
        },onSuccess:()=>{
            console.log("Contact submitted successfully");
        },onError:(error)=>{
            console.error(
                "Contact submission failed:",
                error.response?.data || error.message
            );
        },
    });
    return{
        createContact
    };
};