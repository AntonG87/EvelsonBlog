'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // если у тебя есть этот helper

interface ShareButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {}

export const ShareButton = React.forwardRef<
  HTMLButtonElement,
  ShareButtonProps
>(({ className, title, ...props }, ref) => (
  <Button
    ref={ref}
    variant="outline"
    className={cn(className)}
    {...props}
  >
    {title}
  </Button>
));
ShareButton.displayName = 'ShareButton';
