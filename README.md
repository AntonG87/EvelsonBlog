# 🧠 EvelsonBlog – Fullstack Next.js Blog Platform

**EvelsonBlog** is a modern fullstack blog application built with **Next.js**, **Prisma**, **Tailwind CSS**, and **TypeScript**.  
It showcases skills in UI development, backend architecture, API design, role-based access, and content moderation powered by OpenAI.

## 🚀 Live demo

🌐 [Visit evelson.blog](https://evelson.blog)

---

## ⚙️ Technologies Used

- [Next.js](https://nextjs.org/) – App Router, SSR, and API routes
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS
- [Prisma ORM](https://www.prisma.io/) – Type-safe database client (SQLite/PostgreSQL)
- [TypeScript](https://www.typescriptlang.org/) – Static typing
- [OpenAI API](https://platform.openai.com/) – Content moderation
- [NextAuth.js](https://next-auth.js.org/) – Authentication (coming soon)
- [Resend](https://resend.com/) – Email notifications

---

## ✨ Key Features

- 📝 Post creation with AI moderation
- 🔐 Role-based access: user / author / admin
- 📬 Email distribution to all subscribers
- 🎨 Modern, responsive UI
- 🗂️ Pagination and post filtering
- 📌 Modal windows, tabs, animations
- ⚡ Fast performance and SEO-friendly

---

## 📁 Project Structure

```bash
blog/
├── app/                    # App Router pages and layouts
├── components/             # Reusable UI components
├── lib/                    # Utilities (AI moderation, email distribution)
├── prisma/                 # Prisma schema and seed
├── public/                 # Static assets
├── styles/                 # Tailwind configuration
├── .env.local              # Environment variables
├── tsconfig.json           # TypeScript config
└── ...
```

---

## 🔧 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/AntonG87/EvelsonBlog.git
   cd blog
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables in `.env.local`  
   Example:
   ```env
   DATABASE_URL="file:./dev.db"
   OPENAI_API_KEY=your-openai-key
   RESEND_API_KEY=your-resend-key
   ADMIN_PASSWORD_HASH=your-hashed-password
   ```

4. Apply Prisma migrations and generate client
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. Run the development server
   ```bash
   npm run dev
   ```

---

## 🧪 Example API Endpoints

- `POST /api/create-post` – Create post (with AI moderation and role check)
- `GET /api/posts` – Get paginated & filtered posts
- `POST /api/create-subscriber` – Subscribe to newsletter

---

## 📌 Screenshots

> *(Screenshots coming soon!)*

---

## 📄 License

MIT License.  
Crafted with ❤️ by Anton Evelson.

---

## 📬 Contact

- LinkedIn: [linkedin.com/in/antongruzdev](https://linkedin.com/in/evelson)
- Telegram: [@evelson_dev](https://t.me/evelsonwrs)
