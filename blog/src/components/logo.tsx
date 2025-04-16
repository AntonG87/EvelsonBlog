import React from 'react';
import {LogoText} from "@/components/logo-text";

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="border-[5px] border-white inline-block ">
        <h1 className=" font-fugaz text-7xl p-2 text-white">EVELSON BLOG</h1>
      </div>
    </div>
  );
};

