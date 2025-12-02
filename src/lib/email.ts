import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123'); // Fallback to prevent build error, actual send will fail if invalid

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    services?: string[];
}

export async function sendContactEmail(data: ContactFormData) {
    try {
        const { name, email, phone, company, message, services } = data;

        // Email to agency owner (Eric)
        const ownerEmail = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: process.env.CONTACT_EMAIL || 'hello@beachbirdstudios.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${services && services.length > 0 ? `<p><strong>Interested in:</strong> ${services.join(', ')}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted at ${new Date().toLocaleString()}</p>
      `,
        });

        // Confirmation email to user
        const userEmail = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: email,
            subject: 'Thank you for contacting Beach Bird Studios',
            html: `
        <h2>Thanks for reaching out, ${name}!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to check out our <a href="https://beachbirdstudios.com/resources">free resources</a> or <a href="https://beachbirdstudios.com/services">learn more about our services</a>.</p>
        <br>
        <p>Best regards,<br>Eric Stimson<br>Beach Bird Studios</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Your message:</p>
        <p style="color: #666; font-size: 12px;">${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        return { success: true, ownerEmail, userEmail };
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export async function sendBookingConfirmation(data: {
    name: string;
    email: string;
    meetingType: string;
    dateTime: string;
    meetLink?: string;
}) {
    try {
        const { name, email, meetingType, dateTime, meetLink } = data;

        const emailResponse = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: email,
            subject: `Booking Confirmed: ${meetingType}`,
            html: `
        <h2>Your meeting is confirmed!</h2>
        <p>Hi ${name},</p>
        <p>Your <strong>${meetingType}</strong> is scheduled for:</p>
        <p style="font-size: 18px; font-weight: bold;">${dateTime}</p>
        ${meetLink ? `<p><a href="${meetLink}" style="background: #4EA5E6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Join Meeting</a></p>` : ''}
        <p>We're looking forward to speaking with you!</p>
        <br>
        <p>Best regards,<br>Eric Stimson<br>Beach Bird Studios</p>
      `,
        });

        return { success: true, emailResponse };
    } catch (error) {
        console.error('Error sending booking confirmation:', error);
        throw error;
    }
}
