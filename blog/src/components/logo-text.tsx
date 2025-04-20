import React from 'react';

interface Props {
  className?: string;
}

export const LogoText: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <span className="block font-fustat mt-4 text-[26px] font-semibold text-center text-white">
        Blog about technology and life through the eyes of a developer
      </span>
    </div>
  );
};

