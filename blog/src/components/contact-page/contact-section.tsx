

import Image from 'next/image';
import {ContactsLinks} from "@/components/contact-page/contacts-links";

export const ContactSection = () => {
  return (
    <section className="relative z-10 w-full py-20">
      <div className="max-w-full flex flex-col-reverse lg:flex-row justify-between gap-20">
        {/* Text and Links */}
        <div className="flex-1">
          <h2 className="text-[32px] font-extrabold font-fustat text-[#4B50A2]">
            Let’s connect and <br /> create something great
          </h2>
          <p className="text-[#4B50A2] text-lg mb-8">
            Feel free to reach out via any of the platforms below. I’m always open to discuss ideas, collaborations, or just talk tech.
          </p>
          <ContactsLinks />
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
