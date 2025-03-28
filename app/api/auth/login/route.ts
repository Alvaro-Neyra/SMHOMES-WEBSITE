import Admin from "@/app/models/Admin";
import Session from "@/app/models/Session";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import dotenv from "dotenv";
import connectDB from "@/app/utils/dbConnect";

dotenv.config();

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const { username, password } = await req.json();

        const admin = await Admin.findOne({ username });
        if (!admin) {
            return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
        }

        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

        const ip = req.headers.get("x-forwarded-for") ?? "Desconocida";
        const userAgent = req.headers.get("user-agent") ?? "Desconocido";

        await Session.create({
            adminId: admin._id,
            ip,
            userAgent,
            createdAt: new Date(),
        });

        const response = NextResponse.json({ message: "Inicio de sesión exitoso" });
        response.cookies.set("adminToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60,
            sameSite: "strict",
        });

        return response;
    } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}
