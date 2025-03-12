import { MouseEventHandler } from 'react';
import { IoMdClose } from 'react-icons/io';
import css from './BtnMenuClose.module.css';

export default function BtnMenuClose({
  handleClick,
}: {
  handleClick: MouseEventHandler;
}) {
  return (
    <button type='button' onClick={handleClick}>
      <IoMdClose className={css.icon} size={36} />
    </button>
  );
}
