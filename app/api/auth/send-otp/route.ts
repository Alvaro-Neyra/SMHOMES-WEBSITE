import Admin from "@/app/models/Admin";
import OtpCode from "@/app/models/OtpCode";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendEmail } from "@/app/utils/emailService";
import connectDB from "@/app/utils/dbConnect";

export async function POST(req: Request) {
    try {
        await connectDB();
        const { email } = await req.json();

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return NextResponse.json({ error: "Correo no registrado" }, { status: 404 });
        }

        const otp = crypto.randomInt(100000, 999999).toString();

        await OtpCode.findOneAndUpdate(
            { email },
            { code: otp, expiresAt: new Date(Date.now() + 10 * 60 * 1000) },
            { upsert: true }
        );

        await sendEmail(email, "Código de Verificación", `Tu código de verificación es: ${otp}`);

        return NextResponse.json({ message: "Código enviado al correo" });

    } catch (error) {
        console.error("Error al enviar OTP:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}
