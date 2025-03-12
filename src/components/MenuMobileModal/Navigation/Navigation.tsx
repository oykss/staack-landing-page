import { NAVIGATION_ITEMS } from '../../constant';
import css from './Navigation.module.css';

const MENU_NAVIGATION_ITEMS = [
  ...NAVIGATION_ITEMS.slice(0, 3),
  ...NAVIGATION_ITEMS.slice(4),
];

export default function Navigation() {
  return (
    <nav>
      <ul className={css.list}>
        {MENU_NAVIGATION_ITEMS.map(({ label, path }, i) => (
          <li key={i}>
            <a href={path}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
