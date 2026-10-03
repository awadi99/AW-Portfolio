import express from 'express'
import cors from 'cors';
import app from './app.js';
import dotenv from 'dotenv'
import connection from './config/database.js';

dotenv.config();

app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://aw-portfolio.onrender.com"
    ]
}))

app.use(express.json());

const PORT =process.env.PORT || 3000;


connection();
const server = app.listen(PORT,(req,res)=>{
    console.log("Server running on = ",PORT)
});

export default server;

