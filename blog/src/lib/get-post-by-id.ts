import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getPostById(id: string) {
  try {
    const numericId = Number(id);

    if (isNaN(numericId)) {
      console.error('[GET_POST_BY_ID_ERROR] Invalid ID (not a number):', id);
      return null;
    }

    const post = await prisma.post.findUnique({
      where: { id: numericId }, // 🔧 ← Int, не String
    });

    return post;
  } catch (error) {
    console.error('[GET_POST_BY_ID_ERROR]', error);
    return null;
  }
}
