import { MouseEventHandler } from 'react';
import { IoMdMenu } from 'react-icons/io';
import css from './BtnMenuOpen.module.css';

export default function BtnMenuOpen({
  handleClick,
}: {
  handleClick: MouseEventHandler;
}) {
  return (
    <button type='button' onClick={handleClick} className={css.btn}>
      <IoMdMenu className={css.icon} size={36} />
    </button>
  );
}
