import nodemailer from "nodemailer";
import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";

dotenv.config();

const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);
oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

export async function sendEmail(to: string, subject: string, text: string) {
    try {
        const { token } = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.GOOGLE_USER_EMAIL,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                accessToken: token as string, 
            },
        });

        const mailOptions = {
            from: `"SMHomes Admin" <${process.env.GOOGLE_USER_EMAIL}>`,
            to,
            subject,
            text,
        };

        const result = await transporter.sendMail(mailOptions);
        return result;
    } catch (error) {
        console.error("Error enviando email:", error);
        throw new Error("No se pudo enviar el correo");
    }
}
