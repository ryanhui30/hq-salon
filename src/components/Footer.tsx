import { Blocks, Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";

function Footer() {
  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 mt-auto bg-gray-50 dark:bg-gray-900">
      {/* Decorative top border */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Salon Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Blocks className="size-6 text-purple-600 dark:text-purple-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">HQ Salon</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Your premier destination for beauty and wellness services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                <Facebook className="size-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Phone className="size-5 text-purple-600 dark:text-purple-400" />
                <a href="tel:+1234567890">(123) 456-7890</a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <MapPin className="size-5 text-purple-600 dark:text-purple-400" />
                <span>123 Beauty St, Your City</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Clock className="size-5 text-purple-600 dark:text-purple-400" />
                <span>Mon-Sat: 9am - 7pm</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/services" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
                Services
              </a>
              <a href="/gallery" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
                Gallery
              </a>
              <a href="/about" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
                About Us
              </a>
              <a href="/booking" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
                Book Appointment
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} HQ Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
