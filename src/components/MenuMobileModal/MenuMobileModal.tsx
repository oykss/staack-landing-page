import { MouseEvent, MouseEventHandler, useEffect } from 'react';
import { useMediaPoints } from '../../store/mediaSlice/state';
import Logo from '../ui/Logo/Logo';
import SocList from '../ui/SocList/SocList';
import BtnMenuClose from './BtnMenuClose/BtnMenuClose';
import css from './MenuMobileModal.module.css';
import Navigation from './Navigation/Navigation';

type TMenuMobileModalProps = {
  handleClick: MouseEventHandler;
  isOpen: boolean;
};

export default function MenuMobileModal({
  handleClick,
  isOpen,
}: TMenuMobileModalProps) {
  const { isMobile } = useMediaPoints();

  useEffect(() => {
    if (!isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isMobile && !isOpen) {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);

  const handleClickModal = (e: MouseEvent) => {
    const elm = e.target as HTMLElement;
    if (!['A', 'SVG', 'BUTTON'].includes(elm.nodeName)) e.stopPropagation();
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
