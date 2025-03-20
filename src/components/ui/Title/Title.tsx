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
      viewport={{ once: true, amount: 0.5 }}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
          }}
          className={css.subtitle}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: subtitle ? 0.2 : 0,
          duration: 0.5,
          ease: 'easeOut',
        }}
        className={css.title}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
