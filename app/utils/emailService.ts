interface EmailOptions {
    to: string;
    subject: string;
    text: string;
    html?: string;
    replyTo?: string;
    senderName?: string;
}

export async function sendEmail(options: EmailOptions) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${baseUrl}/api/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(options),
        });

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.error || 'No se pudo enviar el correo');
        }

        return data.result;
    } catch (error) {
        console.error("Error enviando email:", error);
        throw new Error("No se pudo enviar el correo");
    }
}

export async function sendEmailLegacy(to: string, subject: string, text: string) {
    return sendEmail({
        to,
        subject,
        text
    });
}