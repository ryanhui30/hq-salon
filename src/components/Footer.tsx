import { Instagram, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <a href="/services" className="text-[var(--foreground)/80] hover:text-[var(--primary)] transition-colors whitespace-nowrap">
              Services
            </a>
            <a href="/gallery" className="text-[var(--foreground)/80] hover:text-[var(--primary)] transition-colors whitespace-nowrap">
              Gallery
            </a>
            <a href="/about" className="text-[var(--foreground)/80] hover:text-[var(--primary)] transition-colors whitespace-nowrap">
              About
            </a>
            <a href="/contact" className="text-[var(--foreground)/80] hover:text-[var(--primary)] transition-colors whitespace-nowrap">
              Contact
            </a>
            <a href="/booking" className="text-[var(--foreground)/80] hover:text-[var(--primary)] transition-colors whitespace-nowrap">
              Book Now
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="tel:+1234567890" className="text-xs text-[var(--muted)] hover:text-[var(--primary)] transition-colors whitespace-nowrap">
              (415) 666-0288
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[var(--muted)]">
            &copy; {new Date().getFullYear()} HQ Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
