import './globals.css';
import { Fugaz_One, Montserrat, Fustat } from 'next/font/google';
import {Header} from "@/components";
import React from "react";



const fugazOne = Fugaz_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fugaz-one',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});

const fustat = Fustat({
  subsets: ['latin'],
  weight: ['400', '600', '800'], // можешь выбрать веса, которые нужны
  variable: '--font-fustat',
});

export const metadata = {
  title: 'Evelson Blog',
  description: 'Blog about technology and life through the eyes of a developer',
  robots: { index: true, follow: true },
};

export default function rootLayout({children}:{ children: React.ReactNode; }) {
  return (
    <html lang="en" className={`${fugazOne.variable} ${montserrat.variable} ${fustat.variable}`}>
    <body>
    <header>
      <Header/>
    </header>
    <main id="main" role="main">
      {children}
    </main>
    </body>
    </html>
  );
}