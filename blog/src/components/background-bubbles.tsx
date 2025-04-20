import React from 'react';

interface Props {
  className?: string;
}

export const BackgroundBubbles: React.FC<Props> = ({ className }) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
      <img
        src="/bubbles.svg"
        alt="background bubbles"
        className={`absolute ${className} h-auto opacity-50 blur-md mix-blend-soft-light animate-floating`}
      />
    </div>
  );
};