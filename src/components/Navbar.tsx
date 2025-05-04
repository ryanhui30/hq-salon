'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const { theme, setTheme } = useTheme();
  const navRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav
      ref={navRef}
      className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } bg-[var(--background)]]] ${
        lastScrollY > 10 ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors duration-300"
          >
            HQ Salon
          </Link>

          {/* Navigation links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side - Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/booking"
              className="px-4 py-2 text-sm font-medium rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-md transition-all duration-300"
            >
              Book Now
            </Link>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)]/20 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="transition-transform duration-300 hover:rotate-12" />
                ) : (
                  <Moon size={20} className="transition-transform duration-300 hover:rotate-12" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
