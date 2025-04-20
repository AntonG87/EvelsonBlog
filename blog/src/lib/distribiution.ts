import {Post, PrismaClient} from '@prisma/client';
import { Resend } from 'resend';

// создаем объект рассылщика по апи ключу с resend
//const resend = new Resend(process.env.RESEND_API_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);
// доменное имя для рассылки
const DOMAIN_NAME = process.env.DOMAIN_NAME;
const prisma = new PrismaClient();

export async function postDistribution(newPost: Post) {

  const title = 'New post in Evelson Blog ';
  const content = 'New post from Author of the blog Anton Evelson'
  const html = `<p>Visit our <a href="https://evelson.blog">website</a>to view the latest post from Blog Author Anton Evelson. Have a great time and thank you for your attention!</p>`

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
      to: emailList,
      subject: title,
      html: html,
    });

    console.log("Рассылка закончена")
  } catch (error) {
    console.log("При рассылке произошла ошибка:" + error)
  }
}
