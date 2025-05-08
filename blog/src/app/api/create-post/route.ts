import { PrismaClient } from '@prisma/client';
import { postDistribution } from "@/lib/distribiution";
import { OpenAI } from 'openai';

const prisma = new PrismaClient();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, content, author, password } = body;

    if (!title || !content || !author) {
      return new Response(JSON.stringify({ success: false, message: 'Missing required fields' }), { status: 400 });
    }

    let role = "user";
    if (password) {
      if (password === process.env.ADMIN_PASSWORD) {
        role = "admin";
      } else {
        return new Response(JSON.stringify({ success: false, message: 'Unauthorized' }), { status: 401 });
      }
    }

    if (role === "user") {
      if (content.length > 1200) {
        return new Response(JSON.stringify({ success: false, message: 'Content exceeds maximum length (900 characters)' }), { status: 400 });
      }
      if (author.length > 55) {
        return new Response(JSON.stringify({ success: false, message: 'Author name exceeds maximum length (55 characters)' }), { status: 400 });
      }
      if (title.length > 88) {
        return new Response(JSON.stringify({ success: false, message: 'Title exceeds maximum length (80 characters)' }), { status: 400 });
      }

      // ===== МОДЕРАЦИЯ =====
      const moderationPrompt = `
        Ты выступаешь в роли модератора пользовательских сообщений на сайте блога.
        Твоя задача — проверить пост на соответствие правилам:
        - Без рекламы
        - Имеет смысловое содержание
        - Без спама
        - Без мата
        - Без оскорблений
        - Без политических тем
        - Без призывов к насилию
        - Только вежливое и безопасное общение
        
        Проверь следующий пост:
        
        Автор: "${author}"
        Заголовок: "${title}"
        Текст поста: "${content}"
        
        Ответь только "approved", если пост соответствует правилам.
        Если пост нарушает правила, ответь "rejected" и объясни кратко причину отказа на английском языке.
      `;

      const moderationResponse = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: moderationPrompt }],
      });

      const moderationResult = moderationResponse.choices[0]?.message?.content?.trim().toLowerCase();

      let cleanModerationMessage = moderationResult;

      if (cleanModerationMessage?.startsWith('rejected')) {
        cleanModerationMessage = cleanModerationMessage.replace(/^rejected[\s:.]*\s*/i, '');
      }

      if (!moderationResult || !moderationResult.startsWith('approved')) {
        console.log('[POST_REJECTED] Причина отклонения:', moderationResult);
        return new Response(
          JSON.stringify({ success: false, message: `${cleanModerationMessage || 'Empty moderation response'}` }),
          { status: 403 }
        );
      }
      // ===== КОНЕЦ МОДЕРАЦИИ =====
    }

    const newPost = await prisma.post.create({
      data: { title, content, author, role },
    });

    if (newPost.role === "admin") {
      postDistribution(newPost).catch(err => {
        console.error('POST_DISTRIBUTION ERROR', err);
      });
    }

    return new Response(
      JSON.stringify({ success: true, post: newPost }),
      { status: 200 }
    );

  } catch (error) {
    console.error('[CREATE_POST_ERROR]', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
