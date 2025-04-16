import React from 'react';
import {ShareButton} from "@/components/share-button";

interface Props {
  className: string;
}

export const ShareThoughtsButton: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={'flex justify-center items-center h-full gap-40'}>
        <div>
          <h1 className={'font-fustat font-extrabold text-[40px] text-white'}>Share Your Thoughts</h1>
          <span className={'font-montserrat text-[20px] text-white'}>Write and share your expertise with the world.</span>
        </div>
        <ShareButton className={'w-[200px] h-[75px] rounded-full shadow-xl font-fustat text-[24px] font-extrabold text-[#4B6DB7] cursor-pointer hover:text-indigo-800  transition-all duration-300 ease-in-out  hover:scale-105'}/>
      </div>
    </div>
  );
};
