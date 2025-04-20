import React from 'react';
import {AboutMe} from "@/components/about-page/about-me";
import {Skills} from "@/components/about-page/skills";
import {Education} from "@/components/about-page/eductaion";
import {Experience} from "@/components/about-page/experience";

interface Props {
  className: string;
}

const aboutList = [
  {
    category: 'About me',
    title: 'Hello, nice to meet you!',
    content: 'I am a frontend developer creating modern and interactive web applications with React and JavaScript. I enjoy building user-friendly, fast, and accessible interfaces that make users’ work easier and more enjoyable.\n' +
      '\n' +
      'I work with HTML, CSS, JavaScript (ES6+), TypeScript, React, Redux, and Next.js, as well as data handling and authentication tools like Prisma and NextAuth. For UI development, I actively use Tailwind CSS for styling and Zustand for state management. I always strive to write clean, maintainable code with a strong focus on performance and user experience.\n' +
      '\n'
  },
  {
    category: 'Skills',
    title: 'Development Stack',
    content: ['HTML','CSS','Tailwind CSS','JavaScript', 'TypeScript', 'React', 'Next.js', 'Git', 'GitHub', 'Figma', 'Prisma']
  },
  {
    category: 'Education',
    title: 'Path to Knowledge and Professional Growth',
    content:
      `Kfar Galim (High School) | 2016 – 2020: I studied at Kfar Galim, a high school in Haifa, Israel, where I spent four years specializing in computers and arts. Skills acquired: Graphic Design · Computer Science · Art.
  
      IT-Incubator.io | April 2023: An intensive course focused on React and TypeScript, where I also studied Next.js and built several practical projects.
      
     Codecademy | June 2022: An online learning platform where I started my journey into web development, learning the fundamentals of JavaScript.`

  },
  {
    category: 'Experience',
    title: 'Quarry Construction and Completed Projects',
    content: 'Frontend Developer (Freelance) | Pizza Delivery & Burger Ordering Apps\n' +
      'January 2024 – Present, Israel\n' +
      '\n' +
      'As a freelance frontend developer, I create responsive, high-performance web applications using React, Next.js, and TypeScript. I focus on building secure, user-friendly interfaces with Prisma and NextAuth for authentication and data management. My work enhances user experience and ensures seamless functionality across devices. I am committed to writing clean, maintainable code and continuously optimizing performance for better efficiency.'
  }
];

export const AboutList: React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
      <AboutMe
        className={''}
        category={aboutList[0].category}
        title={aboutList[0].title}
        content={aboutList[0].content}
      />
      <Skills
        className={''}
        category={aboutList[1].category}
        title={aboutList[1].title}
        content={aboutList[1].content}
      />
      <Education
        className={''}
        category={aboutList[2].category}
        title={aboutList[2].title}
        content={aboutList[2].content}/>
      <Experience
        className={''}
        category={aboutList[3].category}
        title={aboutList[3].title}
        content={aboutList[3].content}/>
    </div>
  )
};
