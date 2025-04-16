import React from 'react';
import {ArticleCard} from "@/components/article-card";

interface Props {
  className: string;
}

export const ArticleList: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <ArticleCard
        author={'Anton Evelson'}
        date={'now'}
        title={'Hiuali ya '}
        excerpt={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'}
      />
      <ArticleCard
        author={'Anton Evelson'}
        date={'2 hours ago'}
        title={'Dable Push Router'}
        excerpt={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'}
      />
      <ArticleCard
        author={'Anton Evelson'}
        date={'2 days ago'}
        title={'TODO List'}
        excerpt={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'}
      />
      <ArticleCard
        author={'Anton Evelson'}
        date={'2 minutes ago'}
        title={'Frquently Asked Questions'}
        excerpt={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'}
      />
    </div>
  );
};
