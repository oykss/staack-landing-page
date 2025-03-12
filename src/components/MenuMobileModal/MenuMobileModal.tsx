import { MouseEvent, MouseEventHandler } from 'react';
import Logo from '../ui/Logo/Logo';
import SocList from '../ui/SocList/SocList';
import BtnMenuClose from './BtnMenuClose/BtnMenuClose';
import css from './MenuMobileModal.module.css';
import Navigation from './Navigation/Navigation';

export default function MenuMobileModal({
  handleClick,
}: {
  handleClick: MouseEventHandler;
}) {
  const handleClickModal = (e: MouseEvent) => {
    if (e.target === e.currentTarget) e.stopPropagation();
  };

  return (
    <div className={css.overlay} onClick={handleClick}>
      <div className={css.modal} onClick={handleClickModal}>
        <div className={css.headerWrapper}>
          <Logo />
          <BtnMenuClose handleClick={handleClick} />
        </div>
        <div className={css.contentWrapper}>
          <Navigation />
          <SocList />
        </div>
      </div>
    </div>
  );
}
