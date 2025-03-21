import clsx from 'clsx';
import { motion } from 'motion/react';
import map from '../../assets/map.svg';
import Container from '../ui/Container/Container';
import Title from '../ui/Title/Title';
import css from './About.module.css';

export default function About() {
  return (
    <section className='section'>
      <Container>
        <Title title='About us' className={css.title} />
        <p className={clsx('desc', css.desc)}>
          We are Staack, and we believe that using duffle bags to facilitate
          Cannabis banking is a bit outdated. We’re a California & NYC-based
          FinTech company and we provide mobile banking and payment solutions to
          the Cannabis Industry. We pride ourselves on financial transparency,
          secure technology, and compliance for all seed-to-sale transactions in
          the US.
        </p>
        <motion.img
          src={map}
          className={css.image}
          alt='Map where it works'
          width={700}
          height={700}
          initial={{ opacity: 0, skew: '-16deg, -16deg' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          whileInView={{ opacity: 1, skew: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        />
      </Container>
    </section>
  );
}
