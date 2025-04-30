import { useState, useEffect } from 'react';
import { Menu, X, Film, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-lg dark:bg-gray-900/80' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Film className="h-8 w-8 text-purple-500" strokeWidth={1.5} />
          <span className="ml-2 text-xl font-bold">Aicourses4u</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-purple-500 transition-colors">Features</a>
          <a href="#audience" className="hover:text-purple-500 transition-colors">Who Should Attend</a>
          <a href="#bonuses" className="hover:text-purple-500 transition-colors">Bonuses</a>
          <a href="#faq" className="hover:text-purple-500 transition-colors">FAQ</a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button 
            className="hidden md:block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-purple-500/20"
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Register Now
          </button>
          
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-gray-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#features" className="hover:text-purple-500 transition-colors py-2" onClick={toggleMenu}>Features</a>
          <a href="#audience" className="hover:text-purple-500 transition-colors py-2" onClick={toggleMenu}>Who Should Attend</a>
          <a href="#bonuses" className="hover:text-purple-500 transition-colors py-2" onClick={toggleMenu}>Bonuses</a>
          <a href="#faq" className="hover:text-purple-500 transition-colors py-2" onClick={toggleMenu}>FAQ</a>
          <button 
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-purple-500/20 w-full"
            onClick={() => {
              document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
              toggleMenu();
            }}
          >
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;