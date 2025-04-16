import React from 'react';
import { Button } from "@/components/ui/button"

interface Props {
  className: string;
}

export const ShareButton: React.FC<Props> = ({ className }) => {
  return (
    <Button variant="outline" className={className}>Write a Post</Button>
  );
};
