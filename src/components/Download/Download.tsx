import clsx from 'clsx';
import { motion } from 'motion/react';
import { BTN_PRIMARY_EFFECT, FADE_UP_ANIMATION } from '../animation';
import Container from '../ui/Container/Container';
import GhostImg from '../ui/GhostImg';
import Title from '../ui/Title/Title';
import css from './Download.module.css';

export default function Download() {
  return (
    <section className='section'>
      <Container className={css.container}>
        <motion.div className={css.wrap} {...FADE_UP_ANIMATION}>
          <div>
            <Title title='our Weed Paper' subtitle='Download' />
            <motion.a
              className={clsx('btn', css.btn)}
              href='https://youtu.be/etfjb19V_b4?si=AbUuFghVKKMKrNMH'
              target='_blank'
              rel='noopener noreferrer'
              {...BTN_PRIMARY_EFFECT}
            >
              Download
            </motion.a>
          </div>
          <GhostImg width={313} height={290} className={css.image} />
        </motion.div>
      </Container>
    </section>
  );
}
