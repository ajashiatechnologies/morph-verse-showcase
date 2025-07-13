import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Coming Soon', href: '#coming-soon' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MM</span>
          </div>
          <span className="text-xl font-rajdhani font-bold gradient-text">
            MiniMorph Studios
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium hover:text-primary transition-colors interactive group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Social Links & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="p-2 hover:text-primary transition-colors interactive"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="p-2 hover:text-primary transition-colors interactive"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <button className="btn-primary text-sm interactive">
            Join Drop List
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 interactive"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mx-4 mt-4 p-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium hover:text-primary transition-colors interactive"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-primary/20 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 hover:text-primary transition-colors interactive">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 hover:text-primary transition-colors interactive">
                <Youtube size={20} />
              </a>
            </div>
            <button className="btn-primary text-sm interactive">
              Join Drop List
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;