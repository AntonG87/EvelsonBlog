'use client';
import React from 'react';
import {ShareButton} from "@/components";
import Link from "next/link";

interface Props {
  className: string;
}


export const ShareThoughtsButton: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={'flex justify-center items-center h-full  px-5 gap-40 max-lg:gap-20 max-md:gap-15 max-sm:gap-5'}>
        <div className={''}>
          <h1 className={'font-fustat font-extrabold text-[40px] max-md:text-[30px] max-sm:text-[20px] text-white'}>Share Your Thoughts</h1>
          <span className={'font-montserrat text-[20px]  max-md:text-[16px] max-sm:text-[14px] text-white'}>Write and share your expertise with the world.</span>
        </div>
        <Link scroll={false} href="/create-post">
          <ShareButton title={"Write a Post"} className={'w-[200px] max-md:w-[150px] max-sm:w-[115px] max-sm:h-[55px] h-[75px] rounded-full shadow-xl font-fustat text-[20px] max-md:text-[16px] font-extrabold text-[#4B6DB7] cursor-pointer hover:text-indigo-800  transition-all duration-300 ease-in-out  hover:scale-105'}/>
        </Link>
      </div>
    </div>
  );
};
