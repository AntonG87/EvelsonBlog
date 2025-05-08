import {Post, PrismaClient} from '@prisma/client';
import { Resend } from 'resend';

// создаем объект рассылщика по апи ключу с resend
//const resend = new Resend(process.env.RESEND_API_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);
// доменное имя для рассылки
const DOMAIN_NAME = process.env.DOMAIN_NAME;
const prisma = new PrismaClient();

export async function postDistribution(newPost: Post) {

  const title = 'New blog post from Anton Evelson – check it out!';
  const html = `
  <p>Hello!</p>
  <p>We’ve just published a new post on <strong>Evelson Blog</strong>.</p>
  <p>
   Welcome to all our subscribers! This is our first post dedicated to the implementation of the project.
   We are excited to share the results with you and thank each of you for your support and interest.
   We believe this project will be useful and engaging for anyone interested in web development and new technologies.
  </p>
  <p>
    Visit our <a href="https://evelson.blog" target="_blank" rel="noopener noreferrer">website</a>
    to read the latest post from blog author <strong>Anton Evelson</strong>.
  </p>
  <p>Thank you for subscribing and have a great day!</p>
  <img src="https://sendsay.ru/blog/storage/2022/05/21/052a85dbc4007e03efbc0963c0888fe269334795.png" alt="logo">
`;

  // получение активных объектов подписчиков
  const subscribers = await prisma.subscriber.findMany({
    where: {
      isActive: true,
    },
    select: {
      email: true,
    }
  })

  // получение имеиолов из объектов
  const emailList = subscribers.map(e => e.email);

  // проверка наличия подписчиков для рассылки
  if (emailList.length === 0) {
    return null;
  }

  // запускаем рассылку
  try {
    await resend.emails.send({
      from: `EvelsonBlog@${DOMAIN_NAME}`,
      to: `EvelsonBlog@${DOMAIN_NAME}`, // отправляешь сам себе
      bcc: emailList,                   // рассылка остальным — скрыта
      subject: title,
      html: html,
    });

    console.log("Рассылка закончена")
  } catch (error) {
    console.log("При рассылке произошла ошибка:" + error)
  }
}
