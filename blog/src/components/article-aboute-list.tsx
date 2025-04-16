import React from 'react';
import {ArticleCard} from "@/components/article-card";

interface Props {
  className: string;
}

export const ArticleAbouteList: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <ArticleCard
        author={'About me'}
        date={'DESCRIPTION'}
        desc={'About me'}
        title={'Hiuali ya '}
        excerpt={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'}
      />
      <ArticleCard
        author={'Skills'}
        desc={'Skills'}
        date={'DESCRIPTION'}
        title={'Dable Push Router'}
        excerpt={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'}
      />
      <ArticleCard
        author={'Education'}
        date={'DESCRIPTION'}
        desc={'Education'}
        title={'TODO List'}
        excerpt={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'}
      />
      <ArticleCard
        author={'Experience'}
        date={'DESCRIPTION'}
        desc={'Experience'}
        title={'Frquently Asked Questions'}
        excerpt={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'}
      />
    </div>
  );
};
