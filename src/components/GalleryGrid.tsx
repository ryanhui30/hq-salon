"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const SalonGallery = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // Sample salon images - replace with your actual images
  const images = [
    { id: '1', src: '/gallery/haircut-1.jpg', alt: 'Layered haircut', category: 'Cuts' },
    { id: '2', src: '/gallery/color-1.jpg', alt: 'Vibrant hair color', category: 'Color' },
    { id: '3', src: '/gallery/styling-1.jpg', alt: 'Evening styling', category: 'Styling' },
    { id: '4', src: '/gallery/haircut-2.jpg', alt: 'Pixie cut', category: 'Cuts' },
    { id: '5', src: '/gallery/color-2.jpg', alt: 'Balayage highlights', category: 'Color' },
    { id: '6', src: '/gallery/wedding-1.jpg', alt: 'Bridal updo', category: 'Special Occasions' },
    { id: '7', src: '/gallery/mens-1.jpg', alt: 'Men\'s grooming', category: 'Men' },
    { id: '8', src: '/gallery/treatment-1.jpg', alt: 'Hair treatment', category: 'Treatments' },
    { id: '9', src: '/gallery/color-3.jpg', alt: 'Pastel hair color', category: 'Color' },
  ]

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
    hover: { scale: 1.03 }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-[var(--primary)]">
        Our Work Gallery
      </h2>

      {/* Gallery Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            variants={item}
            whileHover="hover"
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedId(image.id)}
            layoutId={`image-container-${image.id}`}
          >
            {/* Image with lazy loading */}
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                <span className="text-[var(--primary-light)] text-sm">{image.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      {selectedId && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedId(null)}
        >
          <motion.div
            layoutId={`image-container-${selectedId}`}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((image) => (
              image.id === selectedId && (
                <>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="mt-4 text-center text-white">
                    <h3 className="text-2xl font-bold">{image.alt}</h3>
                    <p className="text-[var(--primary-light)]">{image.category}</p>
                  </div>
                </>
              )
            ))}
            <button
              className="absolute -top-12 right-0 text-white hover:text-[var(--primary)] transition-colors"
              onClick={() => setSelectedId(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default SalonGallery
