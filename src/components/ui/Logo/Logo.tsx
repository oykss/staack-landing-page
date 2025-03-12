import clsx from 'clsx';

import GhostImg from '../GhostImg';
import css from './Logo.module.css';

export default function Logo({ className }: { className?: string }) {
  return (
    <a href='/' className={clsx(css.logo, className)}>
      <GhostImg />
      Staack
    </a>
  );
}
