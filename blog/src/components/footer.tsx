import React from 'react';


interface Props {
  className: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <p className={'font-fustat text-xl max-sm:text-[15px] text-white text-center'}>
        This blog was created by Anton Evelson.
        <br/>
        Here you will find my thoughts on technology and life.
      </p>
    </div>
  );
};
