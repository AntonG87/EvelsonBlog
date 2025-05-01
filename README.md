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

Header sector 

![image](https://github.com/user-attachments/assets/9e8cfb88-b426-44cb-b08c-1486949a2779)
![image](https://github.com/user-attachments/assets/808774ef-2d79-462a-bfd3-96cd06183ae0)

Main sector

![image](https://github.com/user-attachments/assets/065c3c3c-da13-45cc-83d4-b35912647b41)
![image](https://github.com/user-attachments/assets/3c2ec888-3a0a-485a-9e9a-2fc3286b506c)

Modal sector for creating posts

![image](https://github.com/user-attachments/assets/66032bf8-80e1-4192-b73c-ccb64e675b44)

Validation

![image](https://github.com/user-attachments/assets/467ffc0b-a7a1-4fd5-bb75-d83d132d835c)

Preview

![image](https://github.com/user-attachments/assets/0f30e1ce-7c22-49fb-a892-b7ccbdbe85e5)

Waiting for backend server response

![image](https://github.com/user-attachments/assets/904bb05a-4dbb-4b91-ac23-af79da0c365d)

Successful

![image](https://github.com/user-attachments/assets/ee2b1fc3-6e71-492e-96fa-cdda952f83f3)

Сorrect post on validation, but not on meaning

![image](https://github.com/user-attachments/assets/2c76b2c7-4e53-4e4b-85e9-ae6443a7b896)
![image](https://github.com/user-attachments/assets/8674879c-d47f-4ef2-b5d5-31cd48bd36c1)

Subscribe to update posts only from the author

![image](https://github.com/user-attachments/assets/3566b97a-25e1-48cd-950e-816625ebc210)
![image](https://github.com/user-attachments/assets/3a73f05e-5a0a-4a68-8290-846c9ff5dddc)


---

## 📄 License

MIT License.  
Crafted with ❤️ by Anton Evelson.

---

## 📬 Contact

- LinkedIn: [linkedin.com/in/evelson](https://linkedin.com/in/evelson)
- Telegram: [@evelsonwrs](https://t.me/evelsonwrs)
