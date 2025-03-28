import Property from "@/app/models/Property";
import { authenticateToken } from "@/app/utils/authMiddleware";
import cloudinaryAPI from "@/app/utils/cloudinary";
import connectDB from "@/app/utils/dbConnect";
import { PropertyImage } from "@/app/utils/interfaces";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await connectDB();

        const propertyId = req.nextUrl.pathname.split("/").pop();

        if (!propertyId) {
            return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
        }

        const property = await Property.findById(propertyId);

        if (!property) {
            return NextResponse.json({ error: "Propiedad no encontrada" }, { status: 404 });
        }

        return NextResponse.json(property);
    } catch (error) {
        console.error("Error al obtener la propiedad:", error);
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

        const propertyId = req.nextUrl.pathname.split("/").pop();
        if (!propertyId) {
            return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
        }

        const updatedData = await req.json();
        const updatedProperty = await Property.findByIdAndUpdate(propertyId, updatedData, { new: true });

        if (!updatedProperty) {
            return NextResponse.json({ error: "Propiedad no encontrada" }, { status: 404 });
        }

        return NextResponse.json(updatedProperty);
    } catch (error) {
        console.error("Error al actualizar la propiedad:", error);
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

        const propertyId = req.nextUrl.pathname.split("/").pop();
        if (!propertyId) {
            return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
        }

        const property = await Property.findById(propertyId);
        if (!property) {
            return NextResponse.json({ error: "Propiedad no encontrada" }, { status: 404 });
        }

        await Promise.all(
            property.images
                .filter((img: PropertyImage) => img.public_id) 
                .map((img: PropertyImage) => cloudinaryAPI.uploader.destroy(img.public_id as string))
        );

        await property.deleteOne();

        console.log("🗑️ Propiedad eliminada con éxito ID:", propertyId);
        return NextResponse.json({ message: "Propiedad eliminada con éxito" });
    } catch (error) {
        console.error("Error al eliminar la propiedad:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}

