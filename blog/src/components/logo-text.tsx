import React from 'react';

interface Props {
  className?: string;
}

export const LogoText: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <span className="block relative z-10 font-fustat mt-4 text-[26px] max-lg:text-[22px] max-md:text-[18px] max-sm:text-[12px] font-semibold text-center text-white">
        Blog about technology and life through the eyes of a developer
      </span>
    </div>
  );
};

