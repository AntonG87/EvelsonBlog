import React from 'react';
import {AboutCard} from "@/components/about-page";

interface Props {
  className: string;
  category: string;
  title: string;
  content: string | string[];
}


export const AboutMe: React.FC<Props> = ({ className,
                                         category,
                                         title,
                                         content}) => {
  return (
    <div className={className}>
      <AboutCard
        category={category}
        title={title}
        content={content}
      />
    </div>
  );
};
