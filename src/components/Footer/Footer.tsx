import Container from '../ui/Container/Container';
import Logo from '../ui/Logo/Logo';
import Navigation from '../ui/Navigation';
import SocList from '../ui/SocList/SocList';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Container className={css.container}>
        <Logo className={css.logo} />
        <div>
          <Navigation className={css.nav} />
          <div className={css.wrapSoc}>
            <SocList />
          </div>
        </div>
      </Container>
    </footer>
  );
}
