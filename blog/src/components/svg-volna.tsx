import React from 'react';

interface Props {
  className?: string;
}

export const SvgVolna: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <svg className="absolute bottom-0 left-0 w-full filter  " style={{ pointerEvents: 'none' }} viewBox="0 0 1440 190" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#E4E8F4"
          fillOpacity="1"
          d="M1,150 C180,210 360,100 520,160 C720,210 900,80 1080,160 C1260,240 1380,80 1440,160 L1440,320 L0,300 Z"
        />
      </svg>
    </div>
  );
};
