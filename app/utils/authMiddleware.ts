import jwt from "jsonwebtoken";
import Admin from "../models/Admin";
import dotenv from "dotenv";

dotenv.config();

export const authenticateToken = async (req: Request) => {
    try {
        const cookieHeader = req.headers.get("Cookie");
        if (!cookieHeader) {
            return { error: "Acceso no autorizado", status: 401 };
        }

        const cookies = Object.fromEntries(
            cookieHeader.split("; ").map((c) => c.split("="))
        );
        const token = cookies.adminToken;

        if (!token) {
            return { error: "Token no encontrado", status: 401 };
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

        const admin = await Admin.findById(decoded.id);
        if (!admin) {
            return { error: "Administrador no encontrado", status: 403 };
        }

        return { admin };
    } catch (error) {
        console.error("Error en autenticación:", error);
        return { error: "Token inválido o expirado", status: 403 };
    }
};
