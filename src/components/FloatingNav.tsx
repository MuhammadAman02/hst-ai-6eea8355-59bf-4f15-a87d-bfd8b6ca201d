import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  console.log('FloatingNav rendered');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Why Joylo', href: '#why-joylo' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-6 right-6 z-50 transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
      <div className="glass rounded-full p-2">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2 rounded-full hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-gradient-to-r from-joylo-purple to-joylo-blue hover:from-joylo-blue hover:to-joylo-purple transition-all duration-300 ml-2"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full right-0 mt-2 glass rounded-xl p-4 min-w-[200px]">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                size="sm"
                className="bg-gradient-to-r from-joylo-purple to-joylo-blue hover:from-joylo-blue hover:to-joylo-purple transition-all duration-300 mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FloatingNav;