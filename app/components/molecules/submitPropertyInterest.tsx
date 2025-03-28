'use server';

import { sendEmail } from "@/app/utils/emailService";

interface PropertyInterestFormData {
    name: string;
    phone: string;
    email: string;
    message: string;
    propertyId: string;
    propertyAddress: string;
}

export async function submitPropertyInterest(formData: FormData) {
    const rawFormData: PropertyInterestFormData = {
        name: formData.get('name') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
        propertyId: formData.get('propertyId') as string,
        propertyAddress: formData.get('propertyAddress') as string,
    };

    console.log(`Raw form data: ${JSON.stringify(rawFormData)}`);

    if (!rawFormData.name || !rawFormData.email) {
        throw new Error('Nombre y correo electrónico son obligatorios');
    }

    try {
        const emailSubject = `Interés en Propiedad - ${rawFormData.propertyAddress}`;
        const emailText = `
Detalles de Contacto:
- Nombre: ${rawFormData.name}
- Teléfono: ${rawFormData.phone}
- Correo Electrónico: ${rawFormData.email}

Propiedad de Interés:
- Dirección: ${rawFormData.propertyAddress}
- ID de Propiedad: ${`${process.env.NEXT_PUBLIC_API_BASE_URL}/propiedades/${rawFormData.propertyId}`}

Mensaje:
${rawFormData.message}
        `;

        await sendEmail(
            process.env.COMPANY_CONTACT_EMAIL ?? 'contactos@smhomes.com',
            emailSubject,
            emailText
        );

        return { success: true, message: 'Formulario enviado exitosamente' };
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        return { success: false, message: 'No se pudo enviar el formulario' };
    }
}