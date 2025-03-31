import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { OAuth2Client } from 'google-auth-library';
import Mail from 'nodemailer/lib/mailer';

const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);
oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

interface EmailRequest {
    to: string;
    subject: string;
    text: string;
    html?: string;
    replyTo?: string;
    senderName?: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: EmailRequest = await request.json();
        const { to, subject, text, html, replyTo, senderName } = data;

        const { token } = await oAuth2Client.getAccessToken();

        const userEmail = process.env.GOOGLE_USER_EMAIL;
        if (!userEmail) {
            throw new Error('Email de usuario no configurado');
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: "OAuth2",
                user: userEmail,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                accessToken: token as string,
            },
        });

        const mailOptions: Mail.Options = {
            from: senderName
                ? `"${senderName}" <${userEmail}>`
                : `"SM'HOMES Website" <${userEmail}>`,
            replyTo: replyTo,
            to,
            subject,
            text,
            html: html ?? convertTextToHtml(text),
        };

        const result = await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, result });
    } catch (error) {
        console.error("Error enviando email:", error);
        return NextResponse.json(
            { success: false, error: "No se pudo enviar el correo" },
            { status: 500 }
        );
    }
}

function convertTextToHtml(text: string): string {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        ${text.replace(/\n/g, '<br>').replace(/^- (.+)$/gm, '• $1')}
    </div>
    `;
}