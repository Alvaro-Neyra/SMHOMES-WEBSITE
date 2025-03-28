'use server';

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
        const emailText = `
Detalles de Contacto:
- Nombre: ${rawFormData.name}
- Teléfono: ${rawFormData.phone}
- Correo Electrónico: ${rawFormData.email}

${rawFormData.sellTimeline ? `Timeline de Venta: ${rawFormData.sellTimeline}\n` : ''}

Mensaje:
${rawFormData.message}
        `;
        await sendEmail(
            process.env.COMPANY_CONTACT_EMAIL || 'contactos@smhomes.com',
            emailSubject,
            emailText
        );

        return { success: true, message: 'Formulario enviado exitosamente' };
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        return { success: false, message: 'No se pudo enviar el formulario' };
    }
}