import express from 'express'

import app from './app.js';
import dotenv from 'dotenv'
import connection from './config/database.js';

dotenv.config();

const PORT =process.env.PORT || 3000;
 await connection();
const server = app.listen(PORT,(req,res)=>{
    console.log("Server running on = ",PORT)
});

export default server;

