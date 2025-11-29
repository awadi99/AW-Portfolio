import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, './../../.env') });

const mongoURL = process.env.MONGODB_URL;

if (!mongoURL) {
    console.error("MONGO_URI is not defined in your .env!");
    process.exit(1);
}

const connection = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error(" MongoDB Connection Error:", err);
        process.exit(1);
    }
};

export default connection;