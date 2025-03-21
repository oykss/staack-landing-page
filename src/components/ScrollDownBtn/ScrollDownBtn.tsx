import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { useMediaPoints } from '../../store/mediaSlice/state';
import { BTN_PRIMARY_EFFECT } from '../animation';
import css from './ScrollDownBtn.module.css';

export default function ScrollDownBtn() {
  const { isMobile } = useMediaPoints();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight > window.scrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <AnimatePresence mode='wait'>
      {isVisible && (
        <motion.button
          type='button'
          className={css.btn}
          onClick={scrollToBottom}
          aria-label='Button scroll'
          {...BTN_PRIMARY_EFFECT}
          initial={{ y: 100, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <MdKeyboardArrowUp size={isMobile ? 52 : 40} color='#fdf7f0' />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
