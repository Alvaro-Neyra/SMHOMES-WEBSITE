import Property from "@/app/models/Property";
import connectDB from "@/app/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();

        const properties = await Property.find().lean();

        if (!properties.length) {
            return NextResponse.json({ error: "No hay propiedades disponibles" }, { status: 404 });
        }

        const transformedProperties = properties.map((property) => ({
            ...property,
            id: (property._id as string).toString(),
        }));

        const shuffledProperties = transformedProperties
            .toSorted(() => 0.5 - Math.random())
            .slice(0, 6);

        return NextResponse.json(shuffledProperties, { status: 200 });
    } catch (error) {
        console.error("Error al obtener las propiedades aleatorias:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}