import clsx from 'clsx';
import css from './List.module.css';

type TListProps = {
  arr: string[];
  className?: string;
};

export default function List({ arr, className }: TListProps) {
  return (
    <ul className={clsx(css.list, className)}>
      {arr.map((item, i) => (
        <li key={i} className={css.item}>
          <p className='desc'>{item}</p>
        </li>
      ))}
    </ul>
  );
}
