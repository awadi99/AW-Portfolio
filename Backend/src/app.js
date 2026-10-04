
import express from 'express';
import cors from 'cors';
import contactRoutes from './module/contact/contact.router.js';
const app = express();


const allowedOrigins = [
    "http://localhost:5173",
    "https://aw-portfolio.onrender.com",
];

app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/contact", contactRoutes);

export default app;
