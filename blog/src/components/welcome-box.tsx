import React from 'react';

interface Props {
  className: string;
}

export const WelcomeBox: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={'w-[200px] h-[200px] bg-white/75 rounded-3xl '}></div>
      <div>
        <h1 className={'text-center font-fustat font-extrabold text-[40px] text-white'}>Hello my name is <br/>
        Anton Evelson
        </h1>
        <div className={'w-full h-[2px] mt-4 bg-white'}></div>
        <h1 className={'text-center font-fustat font-extrabold text-[30px] mt-4 text-white/75'}>
          and this is my contacts:</h1>
        </div>
    </div>
  );
};
