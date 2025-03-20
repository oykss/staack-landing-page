import { NAVIGATION_ITEMS } from '../../constant';
import css from './Navigation.module.css';

type TNavigationProps = {
  arr?: { label: string; path: string }[];
  className?: string;
};

export default function Navigation({
  arr = NAVIGATION_ITEMS,
  className,
}: TNavigationProps) {
  return (
    <nav className={className}>
      <ul>
        {arr.map(({ label, path }, i) => (
          <li key={i} className={css.item}>
            <a href={path}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
