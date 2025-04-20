import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return posts;
  } catch (error) {
    console.error('[GET_POSTS_ERROR]', error);
    return [];
  }
}
