"use client";
import React from 'react';
import { Logo ,NavHeader, LogoText, Container, SvgVolna,} from "@/components";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div>
      <div className=" w-full h-[370px] bg-[linear-gradient(to_right,#675CFF,#5954AA)] flex max-md:h-[300px] items-center justify-center  relative">
        <Container className="w-full max-w-screen-xl mx-auto">
          <div className="w-full px-4 h-[50%] flex max-lg:block items-center mb-[50px] max-sm:mb-[2px] justify-between">
            <div className="w-[550px] max-lg:w-full h-max text-center ">
              <Logo className={''}/>
              <LogoText />
            </div>
            <div className="w-full sm:w-auto mt-4 sm:mt-0">
              <NavHeader />
            </div>
          </div>
        </Container>

        {/* Условный рендеринг SVG, если не главная страница */}
        {pathname !== '/' && pathname !== '/create-post' && <SvgVolna />}
      </div>
    </div>
  );
};
