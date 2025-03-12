import { useState } from 'react';
import css from './BtnThemeToggle.module.css';

export default function BtnThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);

  const themeToggle = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <label className={css.switch}>
      <input type='checkbox' onChange={themeToggle} checked={isDark} />
      <span className={css.slider}></span>
    </label>
  );
}
