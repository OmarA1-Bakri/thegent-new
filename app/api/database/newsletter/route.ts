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
      let query = collectionRef.orderBy('publishedAt', 'desc').limit(limit);


      if (tag) {
        query = collectionRef.where('tags', 'array-contains', tag).orderBy('publishedAt', 'desc').limit(limit);
      }

      const snapshot = await query.get();
      let posts: BlogPost[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as BlogPost));


      if (search) {
        const searchLower = search.toLowerCase();
        posts = posts.filter(post =>
          post.title?.toLowerCase().includes(searchLower) ||
          post.excerpt?.toLowerCase().includes(searchLower) ||
          post.content?.toLowerCase().includes(searchLower)
        );
      }

      return NextResponse.json({ posts });
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, excerpt, tags, author, publishedAt, status = 'published' } = body;

    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    if (!clientId) {
      return NextResponse.json({ error: 'Client ID is required' }, { status: 400 });
    }

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const timestamp = new Date();
    const postData = {
      title,
      content,
      excerpt: excerpt || content.substring(0, 200) + '...',
      tags: tags || [],
      author: author || 'Omar Al-Bakri',
      publishedAt: publishedAt ? new Date(publishedAt) : timestamp,
      createdAt: timestamp,
      updatedAt: timestamp,
      status,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      readTime: Math.ceil(content.split(' ').length / 200)
    };

    const baseRef = db.collection('user-project-databases').doc(clientId);
    const docRef = await baseRef.collection('blog-posts').add(postData);

    return NextResponse.json({
      success: true,
      post: { id: docRef.id, ...postData }
    });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    if (!clientId) {
      return NextResponse.json({ error: 'Client ID is required' }, { status: 400 });
    }

    if (!id) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
    }

    const timestamp = new Date();
    const dataWithMetadata = {
      ...updateData,
      updatedAt: timestamp
    };

    const baseRef = db.collection('user-project-databases').doc(clientId);
    const docRef = baseRef.collection('blog-posts').doc(id);

    await docRef.set(dataWithMetadata, { merge: true });

    return NextResponse.json({
      success: true,
      post: { id, ...dataWithMetadata }
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('id');

    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    if (!clientId) {
      return NextResponse.json({ error: 'Client ID is required' }, { status: 400 });
    }

    if (!postId) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
    }

    const baseRef = db.collection('user-project-databases').doc(clientId);
    await baseRef.collection('blog-posts').doc(postId).delete();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
