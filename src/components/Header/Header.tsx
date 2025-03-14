import { useState } from 'react';
import { useMediaPoints } from '../../store/mediaSlice/state';
import MenuMobileModal from '../MenuMobileModal/MenuMobileModal';
import Container from '../ui/Container/Container';
import Logo from '../ui/Logo/Logo';
import BtnMenuOpen from './BtnMenuOpen/BtnMenuOpen';
import BtnThemeToggle from './BtnThemeToggle/BtnThemeToggle';
import css from './Header.module.css';
import Navigation from './Navigation/Navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isMobile } = useMediaPoints();

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return (
    <>
      <header className={css.header}>
        <Container className={css.container}>
          <Logo />
          <div className={css.wrapNavigation}>
            <BtnThemeToggle />
            {isMobile ? <Navigation /> : <BtnMenuOpen handleClick={openMenu} />}
          </div>
        </Container>
      </header>
      {isOpen && !isMobile && (
        <MenuMobileModal handleClick={closeMenu} isOpen={isOpen} />
      )}
    </>
  );
}
