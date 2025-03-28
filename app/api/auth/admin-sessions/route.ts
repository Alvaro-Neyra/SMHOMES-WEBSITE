import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/utils/dbConnect";
import { authenticateToken } from "@/app/utils/authMiddleware";
import Session from "@/app/models/Session";

export async function GET(req: NextRequest) {
    try {
        await connectDB();

        const authResult = await authenticateToken(req);
        if ("error" in authResult) {
            return NextResponse.json({ error: authResult.error }, { status: authResult.status });
        }

        const sessions = await Session.find({ adminId: authResult.admin._id }).sort({ createdAt: -1 });

        return NextResponse.json(sessions);
    } catch (error) {
        console.error("Error al obtener sesiones:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await connectDB();

        const authResult = await authenticateToken(req);
        if ("error" in authResult) {
            return NextResponse.json({ error: authResult.error }, { status: authResult.status });
        }

        const adminId = authResult.admin._id;

        await Session.deleteMany({ adminId });

        const response = NextResponse.json({ message: "Todas las sesiones cerradas" });
        response.cookies.set("adminToken", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: new Date(0),
            sameSite: "strict",
        });

        return response;
    } catch (error) {
        console.error("Error al cerrar sesiones:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}
