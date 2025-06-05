import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  console.log('FloatingNav rendered');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'glass glow-effect' : 'bg-transparent'} rounded-full px-6 py-3`}>
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Sparkles className="w-6 h-6 text-joylo-purple" />
          <span className="font-bold text-white">Joylo AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          size="sm"
          className="hidden md:block bg-gradient-to-r from-joylo-purple to-joylo-blue hover:from-joylo-blue hover:to-joylo-purple transition-all duration-300"
        >
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-xl p-4">
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
    </nav>
  );
};

export default FloatingNav;