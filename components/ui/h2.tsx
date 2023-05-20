import clsx from 'clsx';
import { FC } from 'react';

const H2: FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      {...props}
      className={clsx(
        'mb-6 inline-block text-sm font-bold uppercase tracking-widest text-indigo-500 sm:mb-3',
        className
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
