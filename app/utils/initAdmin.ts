import Admin from "../models/Admin";
import dotenv from "dotenv";

dotenv.config();

export const initAdmin = async () => {
    try {
        const username = process.env.ADMIN_USERNAME?.trim();
        const password = process.env.ADMIN_PASSWORD?.trim();

        if (!username || !password) {
            throw new Error("⚠️ ADMIN_USERNAME o ADMIN_PASSWORD no están definidos en .env");
        }

        const adminCount = await Admin.countDocuments();
        if (adminCount > 0) {
            console.log("✅ Ya existe un administrador. No es necesario crear otro.");
            return;
        }

        await Admin.create({ username, password });

        console.log("🎉 Administrador predeterminado creado exitosamente.");

    } catch (error) {
        console.error("❌ Error al inicializar el administrador:", error);
    }
};
