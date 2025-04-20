import { PrismaClient } from '@prisma/client';
import {postDistribution} from "@/lib/distribiution";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // получаем данные из body запроса
    const { title, content, author, password} = body;

    if (!title || !content || !author) {
      return new Response('Missing required fields', { status: 400 });
    }
    // изначальная роль дефолтного юзера перед проверкой пароля
    let role = "guest"
    //проверка, было ли отравленно поле password с request
    if (password) {
      console.log("есть пароль")
      if (password === "test") {
        role = "admin"
      } else {
        return new Response('Unauthorized', {status: 401});
      }
    }


    // создаем новый пост в базе данных с валидированными данными
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        author,
        role
      },
    });

    // если пост создан админом, то обращаемся к функции рассылки асинхронно и оборачиваем ее в хендлер ошибки рассылки
    if (newPost.role == "admin") {
      postDistribution(newPost).catch(err => {
        console.error('POST_DISTRIBUTION ERROR', err)
      })
    }

    return Response.json(newPost);
  } catch (error) {
    console.error('[CREATE_POST_ERROR]', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}