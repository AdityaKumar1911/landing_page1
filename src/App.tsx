import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Audience from './components/Audience';
import Bonuses from './components/Bonuses';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { AnimatePresence } from './components/AnimatePresence';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add('dark');
    
    // Mark as loaded for entrance animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <AnimatePresence>
      <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <Features />
          <Audience />
          <Bonuses />
          <Registration />
          <FAQ />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;