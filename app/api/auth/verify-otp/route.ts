import OtpCode from "@/app/models/OtpCode";
import { NextResponse } from "next/server";
import connectDB from "@/app/utils/dbConnect";

export async function POST(req: Request) {
    try {
        await connectDB();
        const { email, code } = await req.json();

        const otpEntry = await OtpCode.findOne({ email, code });
        if (!otpEntry || otpEntry.expiresAt < new Date()) {
            return NextResponse.json({ error: "Código inválido o expirado" }, { status: 400 });
        }

        await OtpCode.deleteOne({ _id: otpEntry._id });

        return NextResponse.json({ message: "Código verificado con éxito" });

    } catch (error) {
        console.error("Error al verificar OTP:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}
