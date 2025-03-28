import { NextResponse } from "next/server";

export async function POST() {
    try {
        const response = NextResponse.json({ message: "Sesión cerrada exitosamente" });
        response.cookies.set("adminToken", "", { maxAge: 0, httpOnly: true });
        return response;
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}
