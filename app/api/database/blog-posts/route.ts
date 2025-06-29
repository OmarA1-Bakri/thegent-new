import { NextResponse } from 'next/server';
import { db } from '@/lib/cosmic-database';
interface BlogPost {
  id: string;
  title?: string;
  content?: string;
  excerpt?: string;
  tags?: string[];
  author?: string;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
  slug?: string;
  readTime?: number;
  [key: string]: any;
}
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('id');
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    if (!clientId) {
      return NextResponse.json({ error: 'Client ID is required' }, { status: 400 });
    }
    
    const baseRef = db.collection('user-project-databases').doc(clientId);
    
    if (postId) {
      
      const docRef = baseRef.collection('blog-posts').doc(postId);
      const doc = await docRef.get();
      
      if (!doc.exists) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }
      
      return NextResponse.json({
        id: doc.id,
        ...doc.data()
      });
    } else {
      
      const collectionRef = baseRef.collection('blog-posts');
