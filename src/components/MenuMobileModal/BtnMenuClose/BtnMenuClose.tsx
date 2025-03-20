import { motion } from 'motion/react';
import { MouseEventHandler } from 'react';
import { IoMdClose } from 'react-icons/io';
import { BTN_PRIMARY_EFFECT } from '../../animation';
import css from './BtnMenuClose.module.css';

export default function BtnMenuClose({
  handleClick,
}: {
  handleClick: MouseEventHandler;
}) {
  return (
    <motion.button type='button' onClick={handleClick} {...BTN_PRIMARY_EFFECT}>
      <IoMdClose className={css.icon} size={36} />
    </motion.button>
  );
}
