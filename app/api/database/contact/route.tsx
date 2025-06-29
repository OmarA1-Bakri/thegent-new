import { NextResponse } from 'next/server';
import { db } from '@/lib/cosmic-database';
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    if (!clientId) {
      return NextResponse.json({ error: 'Client ID is required' }, { status: 400 });
    }


    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }


    const timestamp = new Date();
    const contactData = {
      name,
      email,
      company: company || '',
      message,
      createdAt: timestamp,
      status: 'new'
    };


    const baseRef = db.collection('user-project-databases').doc(clientId);


    const contactsRef = baseRef.collection('contacts');
    const docRef = await contactsRef.add(contactData);

    return NextResponse.json({
      success: true,
      id: docRef.id,
      message: 'Contact form submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
}

