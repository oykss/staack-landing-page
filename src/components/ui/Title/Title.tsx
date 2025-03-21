import clsx from 'clsx';
import { motion } from 'motion/react';
import css from './Title.module.css';

type TTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function Title({ title, subtitle, className }: TTitleProps) {
  return (
    <motion.div
      className={clsx(css.wrap, className)}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      {subtitle && (
        <motion.p
          className={css.subtitle}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.2 } },
          }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        className={css.title}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
        }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
