import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { useSetIsMediaPoints } from './store/mediaSlice/state';

export default function App() {
  const setIsMediaPoints = useSetIsMediaPoints();
  const isMobile = useMediaQuery({ query: '(min-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    setIsMediaPoints({ isMobile, isTablet });
  }, [isMobile, isTablet, setIsMediaPoints]);

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
