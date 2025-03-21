import clsx from 'clsx';
import { motion } from 'motion/react';
import { BTN_PRIMARY_EFFECT } from '../../animation';
import GhostImg from '../GhostImg';
import css from './Logo.module.css';

export default function Logo({ className }: { className?: string }) {
  return (
    <motion.a
      href='/'
      className={clsx(css.logo, className)}
      {...BTN_PRIMARY_EFFECT}
    >
      <GhostImg />
      <p>Staack</p>
    </motion.a>
  );
}
