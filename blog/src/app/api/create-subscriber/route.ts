import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const email_regexp: RegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    // валидация имеила по regexp выражению
    if (!email) {
      return new Response('Missing required fields', { status: 400 });
    }
    if (!email_regexp.test(email)) {
      return  new Response('Not valid email', {status: 400})
    }

    // создаем нового subscriber-а, а если такой уже есть ничего не обнавляем( конструкция upsert )
    const newSubscriber = await prisma.subscriber.upsert({
      where: { email: email },
      update: {},
      create: {email: email}
    });
    return Response.json(newSubscriber);

  } catch (error) {
    console.error('[CREATE_POST_ERROR]', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
