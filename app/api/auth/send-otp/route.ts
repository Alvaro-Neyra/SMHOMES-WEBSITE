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

        const emailSubject = 'Restablecimiento de Contraseña - SM HOME\'S Admin';
        const textContent = `
Estimado Administrador,

Has solicitado restablecer tu contraseña para el panel de administración de SM HOME'S.

Tu código de verificación es: ${otp}

Este código expirará en 10 minutos.

Si no solicitaste este cambio, por favor ignora este mensaje o contacta al soporte técnico.

Saludos,
Equipo de SM HOME'S
        `;

        const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Restablecimiento de Contraseña - SM HOME'S Admin</title>
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f8f8f8;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <!-- Encabezado -->
                <div style="background-color: rgba(75, 75, 75, 0.9); padding: 20px; text-align: center;">
                    <img src="https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194903/logo_et12m2.png" alt="SMHomes Logo" style="max-width: 180px; height: auto;">
                    <h1 style="color: #D7BF66; margin-top: 15px; margin-bottom: 0;">Panel de Administración</h1>
                </div>
                
                <!-- Contenido principal -->
                <div style="padding: 30px 20px;">
                    <h2 style="color: rgba(75, 75, 75, 0.9); border-bottom: 2px solid #D7BF66; padding-bottom: 10px; margin-top: 0;">
                        Restablecimiento de Contraseña
                    </h2>
                    
                    <div style="margin-bottom: 25px;">
                        <p style="margin: 15px 0;">Estimado Administrador,</p>
                        <p style="margin: 15px 0;">Has solicitado restablecer tu contraseña para el panel de administración de SM HOME'S.</p>
                    </div>
                    
                    <div style="background-color: rgba(75, 75, 75, 0.05); padding: 20px; border-radius: 5px; border-left: 4px solid #D7BF66; text-align: center; margin-bottom: 25px;">
                        <h3 style="color: rgba(75, 75, 75, 0.9); margin-top: 0; margin-bottom: 15px;">Tu código de verificación es:</h3>
                        <p style="font-size: 24px; font-weight: bold; letter-spacing: 3px; color: #D7BF66; margin: 15px 0;">${otp}</p>
                        <p style="margin: 15px 0; color: rgba(75, 75, 75, 0.7); font-size: 14px;">Este código expirará en 10 minutos.</p>
                    </div>
                    
                    <p style="margin: 15px 0;">Si no solicitaste este cambio, por favor ignora este mensaje o contacta al soporte técnico.</p>
                    
                    <p style="margin: 25px 0 15px;">Saludos,<br>Equipo de SM HOME'S</p>
                </div>
                
                <!-- Pie de página -->
                <div style="background-color: rgba(75, 75, 75, 0.63); color: #ffffff; padding: 20px;">
                    <div style="text-align: center; padding-top: 15px; font-size: 14px;">
                        © ${new Date().getFullYear()} SM HOME'S - Todos los derechos reservados
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;

        await sendEmail({
            to: email,
            subject: emailSubject,
            text: textContent,
            html: htmlContent,
            senderName: "SM HOME'S Admin"
        });

        return NextResponse.json({ message: "Código enviado al correo" });

    } catch (error) {
        console.error("Error al enviar OTP:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}