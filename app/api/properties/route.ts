import Property, { IProperty } from "@/app/models/Property";
import { authenticateToken } from "@/app/utils/authMiddleware";
import cloudinaryAPI from "@/app/utils/cloudinary";
import connectDB from "@/app/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const properties = await Property.find<IProperty>().lean().exec();

        const propertiesWithId = properties.map((property) => ({
            ...property,
            id: String(property._id),
        }));

        return NextResponse.json(propertiesWithId);
    } catch (error) {
        console.error("Error al obtener las propiedades:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const authResult = await authenticateToken(req);
        if ("error" in authResult) {
            return NextResponse.json({ error: authResult.error }, { status: authResult.status });
        }

        const formData = await req.json();
        const { images, floorPlan, ...propertyData } = formData;

        const uploadedImages = await Promise.all(
            images.map(async (image: string) => {
                const uploadResult = await cloudinaryAPI.uploader.upload(image, { folder: "properties" });
                return { url: uploadResult.secure_url, public_id: uploadResult.public_id, alt: uploadResult.original_filename };
            })
        );

        let uploadedFloorPlan = null;
        if (floorPlan) {
            const uploadResult = await cloudinaryAPI.uploader.upload(floorPlan, { folder: "floorPlans" });
            uploadedFloorPlan = { url: uploadResult.secure_url, public_id: uploadResult.public_id, alt: uploadResult.original_filename };
        }

        const newProperty = new Property({ ...propertyData, images: uploadedImages, floorPlan: uploadedFloorPlan });
        await newProperty.save();

        return NextResponse.json(newProperty, { status: 201 });

    } catch (error) {
        console.error("Error al crear la propiedad:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}