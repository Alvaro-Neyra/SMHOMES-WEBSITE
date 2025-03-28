import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("Ya conectado a MongoDB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;
