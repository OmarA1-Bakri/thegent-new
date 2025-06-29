import { NextResponse } from 'next/server';
import { db } from '@/lib/cosmic-database';
interface PortfolioProject {
  id: string;
  title?: string;
  description?: string;
  sector?: string;
  technologies?: string[];
  results?: string[];
  imageUrl?: string;
  projectUrl?: string;
  completedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  featured?: boolean;
  client?: string;
  duration?: string;
  role?: string;
  slug?: string;
  [key: string]: any;
}
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('id');
    const sector = searchParams.get('sector');
    const technology = searchParams.get('technology');
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '20');
    
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    if (!clientId) {
      return NextResponse.json({ error: 'Client ID is required' }, { status: 400 });
    }
    
    const baseRef = db.collection('user-project-databases').doc(clientId);
    
    if (projectId) {
      
      const docRef = baseRef.collection('portfolio-projects').doc(projectId);
      const doc = await docRef.get();
      
      if (!doc.exists) {
        return NextResponse.json({ error: 'Portfolio project not found' }, { status: 404 });
      }
      
      return NextResponse.json({
        id: doc.id,
