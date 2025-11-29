import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import connection from './lib/database.js';
import ContactsInfo from './router/router.js';


dotenv.config();

const app = express();

app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://aw-portfolio.onrender.com"
    ]
}))

app.use(express.json());

const PORT =process.env.PORT || 3000;

app.use("/api/person",ContactsInfo)
connection();
app.listen(PORT,()=>{
    console.log("Server running on this Port = ",PORT)
});


