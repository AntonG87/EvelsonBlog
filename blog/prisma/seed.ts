import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

  await prisma.post.deleteMany();

  // 2. Сбрасываем автоинкремент счётчика id
  await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Post_id_seq" RESTART WITH 1`);

  await prisma.post.createMany({
    data: [
      {
        title: 'Welcome to My Blog',
        content: 'Welcome to my new blog! Here I will share experiences from my journey in web development, frontend design, and coding best practices. Expect tutorials, tips, and reflections on what it takes to grow as a developer in today\'s fast-paced world.',
        author: 'Anton Evelson',
        role: 'admin',
        createdAt: new Date('2025-04-25T10:00:00Z'),
      },
      {
        title: 'Why I Love React',
        content: 'React\'s component-based architecture makes building complex user interfaces much more manageable. By breaking down the UI into isolated, reusable pieces, developers can speed up development and maintenance. JSX also simplifies the code structure by allowing HTML-like syntax directly within JavaScript. Over the years, React has evolved with features like Hooks and Suspense, making it more powerful and developer-friendly.',
        author: 'Anton Evelson',
        role: 'admin',
        createdAt: new Date('2025-04-26T12:00:00Z'),
      },
      {
        title: 'Getting Started with Next.js',
        content: 'Next.js offers out-of-the-box server-side rendering and static site generation, improving the SEO and performance of your web applications. It also provides a simple file-system-based routing, API routes, and powerful features like Incremental Static Regeneration (ISR). Whether you\'re building a blog, an e-commerce site, or a dashboard, Next.js can speed up your development process while keeping your app scalable.',
        author: 'Anton Evelson',
        role: 'admin',
        createdAt: new Date('2025-04-27T09:00:00Z'),
      },
      {
        title: 'Top 5 CSS Tricks',
        content: 'Mastering small CSS tricks can greatly improve your UI designs. Tricks like using `aspect-ratio` to maintain responsive images, `scroll-snap-type` for smoother carousels, `clamp()` for fluid typography, and advanced pseudo-elements for cleaner code can save you tons of time and improve user experience.',
        author: 'Jane Doe',
        role: 'user',
        createdAt: new Date('2025-04-27T11:00:00Z'),
      },
      {
        title: 'Understanding Flexbox',
        content: 'Flexbox is a one-dimensional layout system that makes aligning items vertically and horizontally easy. You can control the size, order, and alignment of items within a container without using float or positioning hacks. Learning Flexbox opens the door to designing cleaner and more responsive UIs effortlessly. It is crucial to understand concepts like `flex-grow`, `flex-shrink`, `flex-basis`, and how the `main axis` and `cross axis` work to become proficient in building responsive layouts.',
        author: 'Jane Doe',
        role: 'user',
        createdAt: new Date('2025-04-27T13:00:00Z'),
      },
      {
        title: 'Tips for Learning Programming',
        content: 'Consistency is key. Instead of cramming, spend at least 30 minutes coding every day. Work on real projects as early as possible. Break problems into small, manageable parts and don\'t be afraid of making mistakes. Remember, debugging is part of learning. Join online communities to stay motivated and get help when needed. Finally, celebrate small wins — each line of working code is a victory!',
        author: 'John Smith',
        role: 'user',
        createdAt: new Date('2025-04-27T15:00:00Z'),
      },
      {
        title: 'Favorite JavaScript Libraries',
        content: 'Aside from React, there are plenty of amazing JavaScript libraries. Lodash helps with utility functions. Axios simplifies HTTP requests. Framer Motion adds beautiful animations to your React apps. D3.js is fantastic for data visualization. Choosing the right library depends on the project needs, but learning a few well-known libraries can significantly improve your workflow and expand what you can build.',
        author: 'John Smith',
        role: 'user',
        createdAt: new Date('2025-04-27T16:00:00Z'),
      },
      {
        title: 'Deploying Next.js Apps',
        content: 'Deploying a Next.js application has never been easier. Vercel, the creators of Next.js, offer seamless deployment with features like preview URLs, automatic builds, and global CDN. However, you can also deploy to platforms like Netlify, AWS, or DigitalOcean. Knowing how to deploy an app properly ensures your users get the best performance and availability.',
        author: 'Anton Evelson',
        role: 'admin',
        createdAt: new Date('2025-04-28T09:00:00Z'),
      },
      {
        title: 'Managing State in React',
        content: 'State management can be handled in multiple ways in React apps. For small projects, React\'s built-in Context API is often enough. For medium to large-scale apps, solutions like Redux or Zustand can offer more scalable state architectures. Zustand, in particular, is a modern alternative providing a minimalistic, boilerplate-free approach to state management.',
        author: 'Anton Evelson',
        role: 'admin',
        createdAt: new Date('2025-04-28T12:30:00Z'),
      },
      {
        title: 'Tailwind CSS Best Practices',
        content: 'While Tailwind CSS promotes utility-first styling, it\'s important to keep your class names clean and DRY. Extract repeated styles into reusable components and use Tailwind\'s `@apply` directive wisely. Organize your files and components in a way that promotes readability. Following best practices ensures that your codebase remains manageable as your project grows.',
        author: 'Jane Doe',
        role: 'user',
        createdAt: new Date('2025-04-28T14:00:00Z'),
      },
      {
        title: 'Building Forms with React Hook Form',
        content: 'React Hook Form simplifies form validation and management in React apps. It reduces re-renders, is lightweight, and integrates easily with UI libraries like Material UI or Tailwind. Features like `register`, `handleSubmit`, and `watch` provide complete control over forms while keeping your code concise and maintainable.',
        author: 'Jane Doe',
        role: 'user',
        createdAt: new Date('2025-04-28T16:00:00Z'),
      },
      {
        title: 'Authentication in Next.js',
        content: 'Next.js simplifies authentication using libraries like NextAuth.js. You can integrate providers like Google, GitHub, or even custom email/password login systems easily. Security best practices such as token expiration, refresh tokens, and encrypted cookies should be considered to keep your user data safe and your app scalable.',
        author: 'John Smith',
        role: 'user',
        createdAt: new Date('2025-04-29T09:30:00Z'),
      },
      {
        title: 'Backend for Frontend Developers',
        content: 'Understanding backend basics — like RESTful APIs, databases, authentication, and server deployment — is invaluable for frontend developers. It not only helps you better collaborate with backend teams but also empowers you to build full-stack applications yourself. Even basic knowledge of Node.js or Express.js can give you a competitive advantage.',
        author: 'John Smith',
        role: 'user',
        createdAt: new Date('2025-04-29T11:00:00Z'),
      },
      {
        title: 'Optimizing Web Performance',
        content: 'Optimizing web performance can lead to better SEO rankings, increased user engagement, and higher conversion rates. Techniques like lazy loading images, code splitting, reducing bundle size, leveraging browser caching, and minimizing critical render path resources are essential strategies for building fast and responsive websites. Measuring performance with tools like Lighthouse and WebPageTest helps identify bottlenecks and guide optimization efforts.',
        author: 'Anton Evelson',
        role: 'admin',
        createdAt: new Date('2025-04-29T14:00:00Z'),
      },
    ],
  });

  console.log('✅ 14 big and real posts seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding posts:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
