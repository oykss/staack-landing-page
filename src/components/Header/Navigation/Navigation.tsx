import { NAVIGATION_ITEMS } from '../../constant';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={css.list}>
        {NAVIGATION_ITEMS.slice(0, 3).map(({ label, path }, i) => (
          <li key={i}>
            <a href={path}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
