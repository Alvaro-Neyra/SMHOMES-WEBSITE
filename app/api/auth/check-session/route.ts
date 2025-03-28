import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
    try {
        const cookieHeader = req.headers.get("Cookie");
        if (!cookieHeader) return NextResponse.json({ error: "No autenticado" }, { status: 401 });

        const cookies = Object.fromEntries(cookieHeader.split("; ").map((c) => c.split("=")));
        const token = cookies.adminToken;
        if (!token) return NextResponse.json({ error: "No autenticado" }, { status: 401 });

        jwt.verify(token, process.env.JWT_SECRET!);
        return NextResponse.json({ message: "Autenticado" });
    } catch (error) {
        console.error("Session verification error:", error);
        return NextResponse.json({ error: "Token inválido o expirado" }, { status: 403 });
    }
}
