import React from 'react';

interface Props {
  className: string;
  title:string;
}

export const Title: React.FC<Props> = ({ className ,title}) => {
  return (
    <div className={className}>{title}</div>
  );
};
