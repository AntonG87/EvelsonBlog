"use client"
import React from 'react';
import { Logo } from "@/components/logo";
import { NavHeader } from "@/components/nav-header";
import { LogoText } from "@/components/logo-text";
import { Container } from "@/components/container";
import { SvgVolna } from "@/components/svg-volna";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div>
      <div className="w-full h-[370px] bg-[linear-gradient(to_right,#675CFF,#5954AA)] flex items-center justify-center relative">
        <Container className="w-full max-w-screen-xl mx-auto">
          <div className="w-full h-[50%] flex items-center mb-[50px] justify-between">
            <div className="w-[550px] h-max">
              <Logo />
              <LogoText />
            </div>
            <NavHeader />
          </div>
        </Container>

        {/* Условный рендеринг SVG, если не главная страница */}

        {pathname !== '/' && pathname !== '/create-post' && <SvgVolna />}

      </div>
    </div>
  );
};
