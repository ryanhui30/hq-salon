"use client"

import React, { useState } from 'react';

type Service = {
  name: string;
  price: string;
};

type ServiceCategory = {
  ladies: Service[];
  men: Service[];
  color: Service[];
  treatments: Service[];
};

type TabLabels = {
  ladies: string;
  men: string;
  color: string;
  treatments: string;
};

const ServiceCard = () => {
  const [activeTab, setActiveTab] = useState<keyof ServiceCategory>('ladies');

  const services: ServiceCategory = {
    ladies: [
      { name: 'Short Layer Cut', price: '$22 & Up' },
      { name: 'Medium Layer Cut', price: '$25 & Up' },
      { name: 'Long Layer Cut', price: '$30 & Up' },
      { name: 'Regular Haircut', price: '$20 & Up' }
    ],
    men: [
      { name: 'Short Hair Cut', price: '$20 & Up' },
      { name: 'Medium Hair Cut', price: '$25 & Up' }
    ],
    color: [
      { name: 'Full Hair Color', price: '$60 & Up' },
      { name: 'Root Touch-Up', price: '$50 & Up' },
      { name: 'Bleach Highlight', price: '$75 & Up' }
    ],
    treatments: [
      { name: 'Permanent Wave', price: '$60 & Up' },
      { name: 'Hot Oil Treatment', price: '$10 & Up' },
      { name: 'Hair Straightening - Short', price: '$150 & Up' },
      { name: 'Hair Straightening - Medium', price: '$180 & Up' },
      { name: 'Hair Straightening - Long', price: '$200 & Up' },
      { name: 'Additional Cut (with chemical service) - Short', price: '$15' },
      { name: 'Additional Cut (with chemical service) - Medium', price: '$20' },
      { name: 'Additional Cut (with chemical service) - Long', price: '$25' }
    ]
  };

  const tabLabels: TabLabels = {
    ladies: "Ladies' Services",
    men: "Men's Services",
    color: "Color Services",
    treatments: "Treatments"
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-[var(--primary)]">Our Services</h2>

      {/* Animated Tabs */}
      <div className="flex justify-center mb-8 relative">
        <div className="flex space-x-1 bg-[var(--background)] border border-[var(--muted)] dark:border-[var(--primary-dark)] p-1 rounded-full shadow-inner">
          {(Object.keys(services) as Array<keyof ServiceCategory>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[var(--primary)] text-white shadow-md'
                  : 'text-[var(--foreground)] hover:text-[var(--primary)]'
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>
      </div>

      {/* Service Cards */}
      <div className="transition-all duration-300">
        <div className="bg-[var(--background)] rounded-xl border p-8 shadow-lg border-[#ddd] dark:border-[var(--primary-dark)]">
          <h3 className="text-2xl font-bold mb-6 text-[var(--primary)] border-b border-[#eee] dark:border-[var(--primary-dark)] pb-3">
            {tabLabels[activeTab]}
          </h3>
          <ul className="space-y-4">
            {services[activeTab].map((service: Service, index: number) => (
              <li
                key={index}
                className="flex justify-between items-center py-3 border-b border-[#eee] dark:border-[var(--primary-dark)] last:border-0 group"
              >
                <span className="text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {service.name}
                </span>
                <span className="font-bold text-[var(--primary)] bg-[var(--primary-light)]/20 px-3 py-1 rounded-full">
                  {service.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
