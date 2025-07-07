import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Fixed Header with desktop + mobile menus.
 * Adds a spacer <div className="h-20" /> immediately after the header so page
 * content is not hidden underneath the fixed bar.
 * On mobile (< md), a floating CTA button (bottom‑right) links to the Affise signup.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Network', href: '#network' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* ───────────── Top Fixed Bar ───────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/uploads/mobtions-og.png" alt="Mobtions Logo" 
                className="h-18 w-auto max-w-[230px] object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 scroll-smooth"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="https://mobtions.affise.com/v2/sign/up"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:opacity-90 text-white">
                  Partner With Us
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Mobile CTA inside menu */}
                <a
                  href="https://mobtions.affise.com/v2/sign/up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:opacity-90 w-full text-white">
                    Partner With Us
                  </Button>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Spacer so content isn’t hidden under the fixed header */}
      <div className="h-20 w-full" />

      {/* Floating CTA (mobile only) */}
      <a
        href="https://mobtions.affise.com/v2/sign/up"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-40"
      >
        <Button className="bg-gradient-to-r from-blue-500 to-orange-500 shadow-xl hover:shadow-2xl text-white rounded-full p-4">
          Partner With Us
        </Button>
      </a>
    </>
  );
};

export default Header;
