import express from 'express';
import contactRoutes from './module/contact/contact.router.js';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact",contactRoutes);

export default app;
