import { motion } from 'motion/react';
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { BTN_PRIMARY_EFFECT } from '../../animation';
import css from './SocList.module.css';

const SOCIAL_LINKS = [
  {
    link: 'www.linkedin.com/in/pavlo-chernichenko-03698a337',
    icon: <FaLinkedinIn size={24} className={css.icon} />,
  },
  {
    link: 'https://github.com/oykss',
    icon: <FaGithub size={24} className={css.icon} />,
  },
  {
    link: 'https://t.me/Pavlo_Chernichenko',
    icon: <FaTelegramPlane size={24} className={css.icon} />,
  },
];

export default function SocList() {
  return (
    <nav>
      <ul className={css.list}>
        {SOCIAL_LINKS.map(({ link, icon }, i) => (
          <li key={i}>
            <motion.a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className={css.link}
              aria-label='Social link'
              {...BTN_PRIMARY_EFFECT}
            >
              {icon}
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
