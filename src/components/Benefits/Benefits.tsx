import Card from '../ui/Card/Card';
import Container from '../ui/Container/Container';
import { SLIDES } from './constant';
import css from './Benefits.module.css';

export default function Benefits() {
  return (
    <section className='section'>
      <Container>
        <ul className={css.list}>
          {SLIDES.map((slide, i) => (
            <li key={i}>
              <Card {...slide} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
