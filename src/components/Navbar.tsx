import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'components', label: 'Components' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ item, isMobile = false }: { item: typeof navItems[0], isMobile?: boolean }) => {
    const isActive = activeSection === item.id;
    
    const baseClasses = isMobile 
      ? "block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 ease-in-out relative group"
      : "relative font-medium transition-all duration-300 ease-in-out group hover:scale-105";
    
    const textClasses = isActive 
      ? "text-primary font-semibold" 
      : "text-foreground hover:text-primary";
    
    return (
      <button 
        onClick={() => scrollToSection(item.id)}
        className={`${baseClasses} ${textClasses}`}
      >
        {item.label}
        
        {/* Animated underline for desktop */}
        {!isMobile && (
          <span 
            className={`absolute bottom-0 left-0 h-0.5 bg-primary transform transition-all duration-300 ease-in-out ${
              isActive 
                ? 'w-full scale-x-100' 
                : 'w-0 group-hover:w-full scale-x-0 group-hover:scale-x-100'
            }`}
          />
        )}
        
        {/* Active indicator dot for desktop */}
        {!isMobile && isActive && (
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
        )}
        
        {/* Mobile active background */}
        {isMobile && isActive && (
          <span className="absolute inset-0 bg-primary/10 rounded-lg -z-10" />
        )}
        
        {/* Mobile hover background */}
        {isMobile && (
          <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        )}
      </button>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-orbitron font-bold text-primary">
            &lt;NM/&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-1">
            {navItems.map((item) => (
              <NavLink key={`mobile-${item.id}`} item={item} isMobile />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;