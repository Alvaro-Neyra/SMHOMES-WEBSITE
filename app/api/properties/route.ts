import Property, { IProperty } from "@/app/models/Property";
import { authenticateToken } from "@/app/utils/authMiddleware";
import connectDB from "@/app/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

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

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        
        const authResult = await authenticateToken(req);
        if ("error" in authResult) {
            return NextResponse.json({ error: authResult.error }, { status: authResult.status });
        }

        const data = await req.json();
        const newProperty = new Property(data);
        await newProperty.save();

        return NextResponse.json({ 
            success: true, 
            property: newProperty 
        });
    } catch (error) {
        console.error("Error al crear la propiedad:", error);
        return NextResponse.json(
            { success: false, error: "Error al crear la propiedad" }, 
            { status: 500 }
        );
    }
}