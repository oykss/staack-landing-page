import clsx from 'clsx';
import { ReactNode } from 'react';
import css from './Container.module.css';

type TContainer = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: TContainer) {
  return <div className={clsx(css.container, className)}>{children}</div>;
}
