# MoumniDev – Full-Stack Developer Portfolio

A personal portfolio website showcasing projects, skills, and contact form built with Next.js, React, Tailwind CSS and Framer Motion.  
Live demo: https://moumni.dev

---

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Project Structure](#project-structure)  
4. [Getting Started](#getting-started)  
5. [Environment Variables](#environment-variables)  
6. [Available Scripts](#available-scripts)  
7. [Deployment](#deployment)  
8. [SEO & Accessibility](#seo--accessibility)  
9. [License](#license)  
10. [Contact](#contact)  

---

## Features

- ✨ **Hero / About Me** section with smooth scroll  
- 🚀 **My Projects** section (in-progress placeholder)  
- 🛠 **Tech Stack** showcase  
- 💬 **Contact Form** with rate-limiting & serverless email API  
- 🎨 Responsive design with Tailwind CSS and mobile menu  
- 🔄 Animations with Framer Motion  
- 🔍 SEO optimized: JSON-LD, `sitemap.xml`, `robots.txt`  
- 🌐 Multi-language support (fr-FR / en-US anchors)  

---

## Tech Stack

- Next.js 15 (App Router, Server Components)  
- React 19 + Client Components  
- TypeScript  
- Tailwind CSS (JIT)  
- Framer Motion  
- React Icons  
- NodeMailer (API route)  

---

## Project Structure

```
/public
    ├─logo.png
    ├─ favicon.ico
    ├─ sitemap.xml
    └─ robots.txt
/src
    ├───app
    │   │   favicon.ico
    │   │   globals.css
    │   │   layout.tsx
    │   │   not-found.tsx
    │   │   page.tsx
    │   │
    │   └───api
    │       └───contact
    │               route.ts
    │
    ├───components
    │   │   Navbar.tsx
    │   │
    │   └───home
    │           About.tsx
    │           Contact.tsx
    │           InProgress.tsx
    │           Projects.tsx
    │           Skills.tsx
    │           Title.tsx
    │
    └───lib
            utils.ts
README.md
next.config.js
tsconfig.json
```

---

## Getting Started

1. Clone the repo  
   ```bash
   git clone https://github.com/moumnidev/Portfolio.git
   cd Portfolio
   ```
2. Install dependencies  
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. Create a `.env.local` in the project root (see [Environment Variables](#environment-variables)).  
4. Run the development server  
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser.

---

## Environment Variables

Create a `.env` file with the following:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
EMAIL_TO=example@example.com
```

- SMTP_* – for sending emails via your SMTP provider

---

## Available Scripts

In the project directory, you can run:

- `npm run dev` – start Next.js in development mode  
- `npm run build` – build the app for production  
- `npm run start` – start the production server  

---

## Deployment

This project is optimized for Vercel. To deploy:

1. Push to GitHub.  
2. Import the repository on Vercel.  
3. Add the same environment variables in Vercel Dashboard.  
4. Deploy.

For more info, see [Next.js Deploy Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## SEO & Accessibility

- Structured data (JSON-LD) for Person  
- `<meta>` tags and open graph in `layout.tsx`  
- `sitemap.xml` & `robots.txt` in `/public`  
- Semantic HTML and ARIA where needed  
- Responsive and keyboard-accessible (focus outlines)  

---

## License

This project is open source under the [MIT License](./LICENSE).

---

## Contact

👤 MoumniDev  
🌐 https://moumni.dev  
✉️ contact@moumni.dev  
📄 [LinkedIn](https://linkedin.com/in/moumnidev) | [GitHub](https://github.com/moumnidev)
