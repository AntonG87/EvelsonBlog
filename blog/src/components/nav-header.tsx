import React from 'react';

interface Props {
  className?: string;
}

export const NavHeader: React.FC<Props> = ({ className }) => {
  return (
    <div className='w-full h-[85px] bg-[linear-gradient(to_right,#E1DFFF,#EDF2F7,#E1DFFF)] shadow-lg flex items-center justify-center'>
       <nav>
         <ul className="flex gap-[65px] justify-center ">
           {["About", "Home", "Contact"].map((item) => (
             <li key={item}>
               <a
                 href="#"
                 className={`text-[#4B6DB7] text-[20px] ] hover:text-indigo-800 font-montserrat font-bold transition duration-200 ease-in-out
                 ${item === "Home" ?
                   // Дополнительные стили для активного пункта
                   "bg-white text-indigo-500 px-5 py-2 rounded-full shadow-md"
                   :
                   ""
                 }
                 `
               }
               >
                 {item}
               </a>
             </li>
           ))}
         </ul>
       </nav>
    </div>
  );
};
