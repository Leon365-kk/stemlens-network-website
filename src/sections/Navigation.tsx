import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'STEM Academy', href: '#stem-academy' },
    { label: 'Community', href: '#community' },
    { label: 'Innovation', href: '#innovation' },
    { label: 'Professionals', href: '#professionals' },
    { label: 'Schools', href: '#schools' },
    { label: 'Shop', href: '#shop' },
    { label: 'Partners', href: '#partners' },
    { label: 'Impact', href: '#impact' },
    { label: 'Global Engagement', href: '#global-engagement' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/logos/stemlens-network-logo.png" 
              alt="STEMlens Network" 
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#D62828] ${
                  isScrolled ? 'text-[#0B1E3B]' : 'text-[#0B1E3B]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2.5 border-2 border-[#0B1E3B] text-[#0B1E3B] text-sm font-semibold rounded-lg hover:bg-[#0B1E3B] hover:text-white transition-colors">
              Join
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0B1E3B]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0B1E3B]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#0B1E3B] font-medium px-2 py-2 hover:text-[#D62828] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 px-2 pt-2">
                <button className="flex-1 px-5 py-2.5 border-2 border-[#0B1E3B] text-[#0B1E3B] text-sm font-semibold rounded-lg">
                  Join
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
