import React from 'react';


interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="border-[5px] border-white inline-block ">
        <h1 className="font-fugaz relative z-10 text-7xl max-md:text-5xl max-sm:text-4xl  p-2 text-white ">
          EVELSON BLOG
        </h1>
      </div>
    </div>
  );
};

