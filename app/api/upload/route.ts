import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { cloudinaryAPI } from "@/app/utils/cloudinary";

export async function POST(req: NextRequest) {
    try {
        const { images } = await req.json();
        if (!images || !Array.isArray(images)) {
            return NextResponse.json({ error: "No se proporcionaron imágenes válidas" }, { status: 400 });
        }

        const uploadedImages = await Promise.all(
            images.map(async (imageBase64: string) => {
                try {
                    const result = await cloudinaryAPI.uploader.upload(imageBase64, {
                        folder: "uploads",
                        public_id: uuidv4(),
                        resource_type: "auto",
                    });
                    return { id: uuidv4(), url: result.secure_url, public_id: result.public_id };
                } catch (error) {
                    console.error("Error al subir imagen:", error);
                    return null;
                }
            })
        );

        const successfulUploads = uploadedImages.filter((img) => img !== null);

        return NextResponse.json({ images: successfulUploads });
    } catch (error) {
        console.error("Error al subir imágenes:", error);
        return NextResponse.json({ error: "Error al subir imágenes" }, { status: 500 });
    }
}
