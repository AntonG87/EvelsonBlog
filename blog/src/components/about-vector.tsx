import React from 'react';

interface Props {
  className: string;
}

export const VectorAbout: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={''}>
        <h1 className={'font-bold text-4xl  text-[#4B50A2] mb-4'}>Hello it`s all about me</h1>
        <p className={'max-w-[445px] text-2xl text-[#4B50A2]/90'}>Here, you’ll find everything you need to know about the author behind this blog, their journey, and the passion that drives their work</p>
      </div>
      <div>
        <img className={ 'max-w-[400px]'} src='/vector-about.png' alt="Anton Evelson"/>
      </div>
    </div>
  );
};
