import React from 'react';
import {Logo} from "@/components/logo";

interface Props {
  className: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Logo className={'flex ]  justify-center'}/>
      <p className={'font-fustat text-xl text-white text-center'}>
        The content may contain subjective views that do not claim to be the absolute truth.
        <br/>
        The administration is not responsible for possible emotional reactions or interpretations of published materials.
        <br/>
        By using the site, you agree that you perceive the materials at your own risk and with respect for freedom of expression.
      </p>
    </div>
  );
};
