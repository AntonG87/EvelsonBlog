// app/api/posts/route.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {createdAt: "desc"},
    });

    return Response.json(posts);
  } catch (error) {
    console.error('[GET_POSTS_ERROR]', error);
    return new Response('Ошибка получения постов', { status: 500 });
  }
}
