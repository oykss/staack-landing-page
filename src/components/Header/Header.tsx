import { useState } from 'react';
import { useMediaPoints } from '../../store/mediaSlice/state';
import { NAVIGATION_ITEMS } from '../constant';
import MenuMobileModal from '../MenuMobileModal/MenuMobileModal';
import Container from '../ui/Container/Container';
import Logo from '../ui/Logo/Logo';
import Navigation from '../ui/Navigation';
import BtnMenuOpen from './BtnMenuOpen/BtnMenuOpen';
import BtnThemeToggle from './BtnThemeToggle/BtnThemeToggle';
import css from './Header.module.css';

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
            {isMobile ? (
              <Navigation
                arr={NAVIGATION_ITEMS.slice(0, 3)}
                className={css.nav}
              />
            ) : (
              <BtnMenuOpen handleClick={openMenu} />
            )}
          </div>
        </Container>
      </header>
      {isOpen && !isMobile && (
        <MenuMobileModal handleClick={closeMenu} isOpen={isOpen} />
      )}
    </>
  );
}
