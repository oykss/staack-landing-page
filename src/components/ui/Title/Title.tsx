import clsx from 'clsx';
import css from './Title.module.css';

type TTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function Title({ title, subtitle, className }: TTitleProps) {
  return (
    <div className={clsx(css.wrap, className)}>
      {subtitle && <p className={css.subtitle}>{subtitle}</p>}
      <h2 className={css.title}>{title}</h2>
    </div>
  );
}
