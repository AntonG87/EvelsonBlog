import React from 'react';
import {Logo} from "@/components/logo";
import {NavHeader} from "@/components/nav-header";
import {LogoText} from "@/components/logo-text";
import {Container} from "@/components/container";
import {Divide} from "lucide-react";
import {
  allowedDisplayValues
} from "next/dist/compiled/@next/font/dist/constants";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div>
    <div className={'w-[100%] h-[340px] bg-[linear-gradient(to_right,#675CFF,#5954AA)] flex items-center justify-center'}>
      <Container className={"w-[1150px] m-auto"}>
      <div className={'w-[100%] h-[50%] flex  items-center justify-around'}>
        <div className={'w-[550px] h-max'}>
          <Logo/>
          <LogoText/>
        </div>
        <NavHeader/>
      </div>
      </Container>
    </div>
    </div>
  );
};
