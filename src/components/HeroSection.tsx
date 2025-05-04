// components/HeroSection.jsx
'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-16">
      <div className="relative bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col items-center">
            {/* Decorative element */}
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-light rounded-full filter blur-3xl opacity-40 z-0" />

            {/* Hero content */}
            <div className="relative z-10 text-center max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Experience True <span className="text-primary">Beauty</span> and Self-Care
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted">
                Your premier destination for professional hair styling, skincare treatments, and complete beauty transformations.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="salon-button-primary"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="salon-button-secondary"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
