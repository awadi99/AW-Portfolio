import express from 'express'
import { getContacts } from '../Controller/contact.controller.js';
const router = express.Router();

router.post("/contacts",getContacts);

export default router;