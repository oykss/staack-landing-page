import { NAVIGATION_ITEMS } from '../constant';

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
          <li key={i}>
            <a href={path}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
