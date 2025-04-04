import { sendEmail } from "@/app/utils/emailService";

interface GeneralInterestFormData {
    name: string;
    phone: string;
    email: string;
    message: string;
    sellTimeline?: string;
}

export async function submitGeneralInterest(formData: FormData) {
    const rawFormData: GeneralInterestFormData = {
        name: formData.get('name') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
        sellTimeline: formData.get('sellTimeline') as string | undefined,
    };

    if (!rawFormData.name || !rawFormData.email) {
        throw new Error('Nombre y correo electrónico son obligatorios');
    }

    try {
        const emailSubject = 'Nuevo Contacto de Interés - SMHomes';
        const textContent = `
Detalles de Contacto:
- Nombre: ${rawFormData.name}
- Teléfono: ${rawFormData.phone}
- Correo Electrónico: ${rawFormData.email}

${rawFormData.sellTimeline ? `Timeline de Venta: ${rawFormData.sellTimeline}\n` : ''}

Mensaje:
${rawFormData.message}
        `;

        const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuevo Contacto - SMHomes</title>
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f8f8f8;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <!-- Encabezado -->
                <div style="background-color: rgba(75, 75, 75, 0.9); padding: 20px; text-align: center;">
                    <img src="https://res.cloudinary.com/dbp2p2kwh/image/upload/v1743194903/logo_et12m2.png" alt="SMHomes Logo" style="max-width: 180px; height: auto;">
                </div>
                
                <!-- Contenido principal -->
                <div style="padding: 30px 20px;">
                    <h2 style="color: rgba(75, 75, 75, 0.9); border-bottom: 2px solid #D7BF66; padding-bottom: 10px; margin-top: 0;">
                        Nuevo Contacto de Interés General
                    </h2>
                    
                    <div style="margin-bottom: 25px;">
                        <h3 style="color: rgba(75, 75, 75, 0.9); margin-bottom: 15px;">Detalles del Cliente:</h3>
                        <p style="margin: 8px 0;"><strong>Nombre:</strong> ${rawFormData.name}</p>
                        <p style="margin: 8px 0;"><strong>Teléfono:</strong> ${rawFormData.phone}</p>
                        <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${rawFormData.email}" style="color: #D7BF66; text-decoration: none;">${rawFormData.email}</a></p>
                        ${rawFormData.sellTimeline ? `<p style="margin: 8px 0;"><strong>Timeline de Venta:</strong> ${rawFormData.sellTimeline}</p>` : ''}
                    </div>
                    
                    <div style="background-color: rgba(75, 75, 75, 0.05); padding: 20px; border-radius: 5px; border-left: 4px solid #D7BF66;">
                        <h3 style="color: rgba(75, 75, 75, 0.9); margin-top: 0; margin-bottom: 15px;">Mensaje del Cliente:</h3>
                        <p style="white-space: pre-line; margin: 0; color: rgba(75, 75, 75, 0.9);">${rawFormData.message}</p>
                    </div>
                </div>
                
                <!-- Pie de página -->
                <div style="background-color: rgba(75, 75, 75, 0.63); color: #ffffff; padding: 20px;">
                    <div style="margin-bottom: 15px; text-align: center;">
                        <h4 style="margin-top: 0; margin-bottom: 10px; font-size: 16px;">Contacto</h4>
                        <p style="margin: 5px 0; font-size: 14px;">
                            <strong>Móvil y WhatsApp:</strong> 
                            <a href="tel:+34691344647" style="color: #D7BF66; text-decoration: none;">+34 691 344 647</a>
                        </p>
                        <p style="margin: 5px 0; font-size: 14px;">
                            <strong>Email:</strong> 
                            <a href="mailto:fabianmasko@smhomesrealstate.com" style="color: #D7BF66; text-decoration: none;">fabianmasko@smhomesrealstate.com</a>
                        </p>
                        <p style="margin: 5px 0; font-size: 14px;">
                            <strong>Dirección:</strong> C. Caballero de Rodas, 120, 03182 Torrevieja, Alicante, España
                        </p>
                    </div>
                    
                    <div style="text-align: center; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 14px;">
                        © ${new Date().getFullYear()} SMHomes - Todos los derechos reservados
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;

        await sendEmail({
            to: process.env.COMPANY_CONTACT_EMAIL ?? 'fabianmasko@smhomesrealstate.com',
            subject: emailSubject,
            text: textContent,
            html: htmlContent,
            replyTo: rawFormData.email,
            senderName: `${rawFormData.name} (Cliente Potencial)`
        });

        return { success: true, message: 'Formulario enviado exitosamente' };
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        return { success: false, message: 'No se pudo enviar el formulario' };
    }
}