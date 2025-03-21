import { motion } from 'motion/react';
import { PARTNERS_LIST } from './constant';
import css from './PartnerList.module.css';

export default function PartnerList() {
  return (
    <motion.ul
      className={css.list}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      {PARTNERS_LIST.map((partner, i) => (
        <motion.li
          key={i}
          className={css.item}
          variants={{
            hidden: { x: -50, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { delay: 0.15 * i } },
          }}
        >
          <img src={partner} alt={`Partner ${i}`} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
