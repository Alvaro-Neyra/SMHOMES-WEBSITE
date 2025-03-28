import Admin from "@/app/models/Admin";
import { NextResponse } from "next/server";
import connectDB from "@/app/utils/dbConnect";

export async function POST(req: Request) {
    try {
        await connectDB();
        const { email, newPassword } = await req.json();

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
        }

        admin.password = newPassword;
        await admin.save();

        return NextResponse.json({ message: "Contraseña restablecida con éxito" });

    } catch (error) {
        console.error("Error al restablecer contraseña:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}
