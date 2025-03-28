import mongoose from "mongoose";
import dotenv from "dotenv";
import { initAdmin } from "./initAdmin";

dotenv.config();

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("Ya conectado a MongoDB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        await initAdmin(); // Inicializa el administrador después de conectar a la base de datos
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;
