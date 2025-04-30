'use client';
import React from 'react';
import {GoToPostsButton} from "@/components/go-to-posts-button";

export const SpotlightSection = () => {
  return (
    <section className=" px-4 relative bg-[linear-gradient(to_right,#675CFF,#5954AA)] text-white pb-32 min-h-[900px] overflow-hidden">
      <div className="max-w-6xl mx-auto  pt-24 max-md:pt-2 flex max-lg:grid  items-center justify-between max-lg:justify-center">
        {/* Левая часть — текст */}
        <div className="max-w-xl">
          <h2 className="text-5xl relative z-10 max-md:text-4xl max-sm:text-3xl font-fustat font-extrabold mb-6 max-lg:text-center ">
            Write. Share. <br /> Stay in The Spotlight.
          </h2>
          <p className="text-lg relative z-10 max-md:text-sm font-fustat font-medium text-indigo-100/90 max-lg:text-center mb-6">
            Welcome to Evelson Blog — a personal space created by the founder to share thoughts, ideas,
            and reflections. This platform is open to everyone who wishes to express themselves within
            the bounds of the law. Here, freedom of speech is respected, honesty is valued,
            and participation is always welcome..
          </p>
          <div className={'max-lg:grid max-lg:justify-center max-lg:mb-10'}>
          <GoToPostsButton  />
        </div>
        </div>

        {/* Правая часть — карточка */}
        <div className={'max-lg:grid max-lg:justify-center'}>
          <img className={'w-[400px] relative z-10'} src="/heder-vector.png" alt="vector"/>
        </div>
      </div>

      {/* Волна снизу */}
      <svg className="absolute bottom-0 left-0 w-full filter drop-shadow-lg" style={{ pointerEvents: 'none' }} viewBox="0 0 1440 290" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#E4E8F4"
          fillOpacity="1"
          d="M0,160 C180,240 360,80 540,160 C720,240 900,80 1080,160 C1260,240 1380,80 1440,160 L1440,320 L0,320 Z"
        />
      </svg>



    </section>
  );
};
