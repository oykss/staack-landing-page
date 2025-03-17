import clsx from 'clsx';
import Container from '../ui/Container/Container';
import GhostImg from '../ui/GhostImg';
import Title from '../ui/Title/Title';
import css from './Download.module.css';

export default function Download() {
  return (
    <section className='section'>
      <Container className={css.container}>
        <div className={css.wrap}>
          <div>
            <Title title='our Weed Paper' subtitle='Download' />
            <a
              className={clsx('btn', css.btn)}
              href='https://youtu.be/etfjb19V_b4?si=AbUuFghVKKMKrNMH'
              target='_blank'
              rel='noopener noreferrer'
            >
              Download
            </a>
          </div>
          <GhostImg width={313} height={290} className={css.image} />
        </div>
      </Container>
    </section>
  );
}
