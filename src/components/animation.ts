export const BTN_PRIMARY_EFFECT = {
  whileHover: {
    opacity: 0.8,
    transition: {
      duration: 0.2,
    },
  },
  whileTap: {
    y: 2,
    opacity: 0.8,
    transition: {
      duration: 0.1,
    },
  },
  whileFocus: {
    opacity: 0.8,
    transition: {
      duration: 0.2,
    },
  },
  initial: {
    opacity: 1,
    scale: 1,
  },
};

export const FADE_UP_ANIMATION = {
  initial: {
    opacity: 0,
    y: 50,
  },
  transition: {
    duration: 0.2,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
};
