import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactEmail } from '@/lib/email';

// Validation schema
const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    services: z.array(z.string()).optional(),
    honeypot: z.string().optional(), // Spam protection
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Honeypot check - if filled, it's likely a bot
        if (body.honeypot) {
            return NextResponse.json(
                { error: 'Invalid submission' },
                { status: 400 }
            );
        }

        // Validate request body
        const validatedData = contactSchema.parse(body);

        // Send emails
        await sendContactEmail(validatedData);

        return NextResponse.json(
            { success: true, message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.errors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}
