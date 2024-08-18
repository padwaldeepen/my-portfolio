import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import './App.scss';

import { About } from './components/about/About';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { CustomNavbar } from './components/navbar/Navbar';
import { Skills } from './components/skills/Skills';
import './styles.scss';

export const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [ showScrollToTop, setShowScrollToTop ] = useState(false);

  const scrollToView = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementRef.current.offsetTop,
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='app'>
      <CustomNavbar
        scrollToView={ scrollToView }
        homeRef={ homeRef }
        aboutRef={ aboutRef }
        skillsRef={ skillsRef }
      />
      <div className='sections'>
        <Home ref={ homeRef } />
        <About ref={ aboutRef } />
        <Skills ref={ skillsRef } />
      </div>
      <Footer />
      {showScrollToTop && (
        <button className='scroll-to-top' onClick={ scrollToTop }>
          <i className='bi bi-arrow-up-circle-fill' />
        </button>
      )}
    </div>
  );
};
