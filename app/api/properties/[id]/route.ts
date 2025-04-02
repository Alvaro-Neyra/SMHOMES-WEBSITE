import { NextRequest, NextResponse } from "next/server";
import Property from "@/app/models/Property";
import connectDB from "@/app/utils/dbConnect";
import { authenticateToken } from "@/app/utils/authMiddleware";
import { deleteImagesFromCloudinary } from "@/app/utils/imageService";
import { cloudinaryAPI } from "@/app/utils/cloudinary";
import { PropertyImage } from "@/app/utils/interfaces";

export const GET = async (
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) => {
    try {
        await connectDB();
        const { id: propertyId } = await context.params;

        if (!propertyId || propertyId === "undefined") {
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
};

export const PUT = async (
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) => {
    try {
        const authResult = await authenticateToken(req);
        if ("error" in authResult) {
            return NextResponse.json({ error: authResult.error }, { status: authResult.status });
        }

        const { id: propertyId } = await context.params;

        if (!propertyId) {
            return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
        }

        await connectDB();
        const updatedData = await req.json();
        const existingProperty = await Property.findById(propertyId);

        if (!existingProperty) {
            return NextResponse.json({ error: "Propiedad no encontrada" }, { status: 404 });
        }

        const imagesToRemove = existingProperty.images.filter((img: PropertyImage) => {
            return !updatedData.images.some(
                (updatedImg: PropertyImage) => updatedImg.url === img.url
            );
        });

        if (imagesToRemove.length > 0) {
            await deleteImagesFromCloudinary(imagesToRemove);
        }

        const updatedProperty = await Property.findByIdAndUpdate(
            propertyId,
            updatedData,
            { new: true, runValidators: true }
        );

        return NextResponse.json(updatedProperty);
    } catch (error) {
        console.error("Error al actualizar la propiedad:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
};

export const DELETE = async (
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) => {
    try {
        await connectDB();

        const authResult = await authenticateToken(req);
        if ("error" in authResult) {
            return NextResponse.json({ error: authResult.error }, { status: authResult.status });
        }

        const { id: propertyId } = await context.params;

        if (!propertyId || propertyId === "undefined") {
            return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
        }

        const property = await Property.findById(propertyId);
        if (!property) {
            return NextResponse.json({ error: "Propiedad no encontrada" }, { status: 404 });
        }

        await Promise.all(
            property.images
                .filter((img: PropertyImage) => img.public_id)
                .map((img: PropertyImage) =>
                    cloudinaryAPI.uploader.destroy(img.public_id as string)
                )
        );

        await property.deleteOne();

        console.log("🗑️ Propiedad eliminada con éxito ID:", propertyId);
        return NextResponse.json({ message: "Propiedad eliminada con éxito" });
    } catch (error) {
        console.error("Error al eliminar la propiedad:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
};
