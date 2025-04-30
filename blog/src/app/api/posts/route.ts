import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Маппинг URL-роли на базу данных
const roleMapping: Record<string, string> = {
  author: "admin",
  user: "user",
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '4');
  const skip = (page - 1) * pageSize;
  const roleFromUrl = searchParams.get('role') || 'all';

  try {
    let where = {};

    if (roleFromUrl !== 'all') {
      const dbRole = roleMapping[roleFromUrl];
      if (dbRole) {
        where = { role: dbRole };
      }
    }

    const posts = await prisma.post.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
    });

    const totalPosts = await prisma.post.count({
      where,
    });

    return Response.json({
      posts,
      totalPosts,
    });
  } catch (error) {
    console.error('[GET_POSTS_ERROR]', error);
    return new Response('Ошибка получения постов', { status: 500 });
  }
}
