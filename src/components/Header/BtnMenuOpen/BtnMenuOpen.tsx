import { motion } from 'motion/react';
import { MouseEventHandler } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { BTN_PRIMARY_EFFECT } from '../../animation';
import css from './BtnMenuOpen.module.css';

export default function BtnMenuOpen({
  handleClick,
}: {
  handleClick: MouseEventHandler;
}) {
  return (
    <motion.button
      type='button'
      onClick={handleClick}
      className={css.btn}
      aria-label='Button menu open'
      {...BTN_PRIMARY_EFFECT}
    >
      <IoMdMenu className={css.icon} size={36} />
    </motion.button>
  );
}
