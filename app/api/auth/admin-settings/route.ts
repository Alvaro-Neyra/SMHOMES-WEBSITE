import Admin from "@/app/models/Admin";
import { authenticateToken } from "@/app/utils/authMiddleware";
import connectDB from "@/app/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await connectDB();

        const authResult = await authenticateToken(req);
        if ("error" in authResult) {
            return NextResponse.json({ error: authResult.error }, { status: authResult.status });
        }

        const admin = await Admin.findById(authResult.admin._id).select("-password");

        if (!admin) {
            return NextResponse.json({ error: "Administrador no encontrado" }, { status: 404 });
        }

        return NextResponse.json(admin);
    } catch (error) {
        console.error("Error al obtener el perfil del admin:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        await connectDB();

        const authResult = await authenticateToken(req);
        if ("error" in authResult) {
            return NextResponse.json({ error: authResult.error }, { status: authResult.status });
        }

        const { username, email, currentPassword, newPassword } = await req.json();
        const admin = await Admin.findById(authResult.admin._id);

        if (!admin) {
            return NextResponse.json({ error: "Administrador no encontrado" }, { status: 404 });
        }

        if (newPassword) {
            if (!currentPassword) {
                return NextResponse.json({ error: "Debes ingresar la contraseña actual" }, { status: 400 });
            }

            const isMatch = await admin.comparePassword(currentPassword);
            if (!isMatch) {
                return NextResponse.json({ error: "La contraseña actual es incorrecta" }, { status: 401 });
            }

            admin.password = newPassword;
        }

        admin.username = username || admin.username;
        admin.email = email || admin.email;
        await admin.save();

        return NextResponse.json({ message: "Perfil actualizado correctamente" });
    } catch (error) {
        console.error("Error al actualizar el perfil del admin:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}
