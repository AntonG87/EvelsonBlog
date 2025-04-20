'use client';
import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

interface Props {
  className?: string;
}

export const ContactsLinks: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="space-y-4">
        <a
          href="https://www.linkedin.com/in/evelson/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[linear-gradient(to_right,#675CFF,#5954AA)] text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform"
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a
          href="mailto:evelsonanton@gmail.com"
          className="flex items-center gap-3 bg-[linear-gradient(to_right,#675CFF,#5954AA)] text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform">
          <SiGmail size={24} /> Gmail
        </a>
        <a
          href="https://github.com/AntonG87"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[linear-gradient(to_right,#675CFF,#5954AA)] text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform"
        >
          <FaGithub size={24} /> GitHub
        </a>
      </div>
    </div>
  );
};
