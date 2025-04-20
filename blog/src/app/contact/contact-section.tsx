'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Image from 'next/image';

export const ContactSection = () => {
  return (
    <section className="bg-[#E4E8F4] w-full py-20">
      <div className="max-w-7xl mx-auto  flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text and Links */}
        <div className="flex-1">
          <h2 className="font-bold text-4xl  text-[#4B50A2] mb-6">
            Let’s connect and <br /> create something great
          </h2>
          <p className="text-[#4B50A2] text-lg mb-8">
            Feel free to reach out via any of the platforms below. I’m always open to discuss ideas, collaborations, or just talk tech.
          </p>

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

        {/* Illustration */}
        <div className="flex-1">
          <Image
            src="/eveloper-illustration.png" // замените на свой путь
            alt="Developer working on a laptop"
            width={500}
            height={550}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
