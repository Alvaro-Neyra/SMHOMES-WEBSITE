import { cloudinaryAPI } from "@/app/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { public_id } = await req.json();

        if (!public_id) {
            return NextResponse.json(
                { error: "El campo 'public_id' es obligatorio" },
                { status: 400 }
            );
        }

        const result = await cloudinaryAPI.uploader.destroy(public_id);

        if (result.result !== "ok") {
            return NextResponse.json(
                { error: "Error al eliminar la imagen de Cloudinary" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error al eliminar imagen de Cloudinary:", error);
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}