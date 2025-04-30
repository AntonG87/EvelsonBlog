import React from 'react';

interface Props {
  className?: string;
}

export const GoToPostsButton: React.FC<Props> = ({ className }) => {
  const scrollToPosts = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };
  return (
    <button
      className="bg-white text-[16px] font-fustat text-indigo-600 font-bold px-6 py-3 rounded-xl hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer"
      onClick={() => scrollToPosts('posts')}
    >
      GO TO POST
    </button>
  );
}

