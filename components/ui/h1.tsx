import { FC } from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva('text-slate-700 dark:text-slate-100 font-bold', {
  variants: {
    size: {
      default: 'text-lg md:text-xl lg:text-2xl',
      lg: 'text-3xl md:text-4xl lg:text-5xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface H1Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const H1: FC<H1Props> = ({ children, className, size, ...props }) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

export default H1;
