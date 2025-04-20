import React from 'react';

interface Props {
  className: string;
}

export const  Contacts: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        {/* Карточки */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Email */}
          <div className="rounded-[20px] bg-white w-[320px] h-[240px] text-center shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#675CFF] to-[#4B50A2] text-white py-4 font-bold text-4xl font-fustat">
              Email
            </div>
            <div className="py-8 text-[#4B50A2] text-[28px] font-fustat ">
              evelsonanton<br />@gmail.com
            </div>
          </div>

          {/* LinkedIn */}
          <div className="rounded-[20px] bg-white w-[320px]  h-[240px] text-center shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#6B8DFB] to-[#4D67D8] text-white py-4 font-bold text-4xl font-fustat">
              Linkedin

            </div>
            <div className="py-8 text-[#4B50A2] text-[28px] font-fustat ">
              linkedin.com/in<br />/evelson/
            </div>
          </div>

          {/* GitHub */}
          <div className="rounded-[20px] bg-white w-[320px]  h-[240px] text-center shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#B54798] to-[#7B74DA] text-white py-4 font-bold text-4xl font-fustat">
              GitHub
            </div>
            <div className="py-8 text-[#4B50A2] text-[28px] font-fustat ">
              github.com/<br />AntonG87
            </div>
          </div>
        </div>

        {/* Телефон */}
        <div className="mt-[75px] bg-gradient-to-r from-white to-[#B2BBF3] rounded-[25px] shadow-lg px-10 h-[92px] py-4">
          <p className="text-center font-fustat  text-3xl text-transparent bg-clip-text py-4 bg-[#4B6DB7] ">
            +972 53 963 9218
          </p>
        </div>

    </div>
  );
};
