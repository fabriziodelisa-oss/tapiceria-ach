'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: '/images/cabecero.jpg', alt: 'Cabecero cama' },
    { src: '/images/cambio.png', alt: 'Tapizado techo coche' },
    { src: '/images/sofa2.jpg', alt: 'Tapizado sofá' },
    { src: '/images/volante.jpg', alt: 'Tapizado volante' },
    { src: '/images/volante2.jpg', alt: 'Tapizado volante 2' },
  ]

  return (
    <div className="flex flex-col">

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/34638746788"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 flex-shrink-0"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.545 5.874L.057 23.57a.75.75 0 0 0 .92.919l5.635-1.475A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.91 0-3.7-.513-5.243-1.405l-.375-.22-3.898 1.02 1.043-3.794-.242-.389A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-medium">
          ¡Escríbenos!
        </span>
      </a>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-6 text-white text-4xl font-light hover:text-red-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white text-sm opacity-70">{selectedImage.alt}</p>
        </div>
      )}

      {/* Sección Inicio */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
        <h1 className="text-5xl font-bold text-red-700 mb-4">Tapicería ACH+</h1>
        <p className="text-xl text-white max-w-xl text-center">
          Restauración y tapizado del hogar y coches.
        </p>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="min-h-screen flex flex-col justify-center items-center bg-[#1a1a1a] text-white px-4">
        <h2 className="text-4xl font-bold text-red-700 mb-6">Servicios</h2>
        <ul className="space-y-3 text-lg text-white text-center">
          <li>Tapizado y reparación de:</li>
          <li>sofás y sillones</li>
          <li>sillas y muebles</li>
          <li>cabeceros de cama</li>
          <li>techo, puertas, asientos, capotas y volantes de coches</li>
          <li>asiento de motos</li>
          <li>trabajos en lona</li>
        </ul>
      </section>

      {/* Sección Galería */}
      <section id="galeria" className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
        <h2 className="text-4xl font-bold text-red-700 mb-6">Galería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="min-h-screen flex flex-col justify-center items-center bg-[#1a1a1a] text-white px-4">
        <h2 className="text-4xl font-bold text-red-700 mb-6">Contacto</h2>
        <p className="mb-4">📍 Calle Olimpia Nº57, Costa del silencio. Tenerife</p>
        <p className="mb-4">📞 <a href="tel:+34638746788" className="text-red-700 hover:underline">+34 638 74 67 88</a></p>
        <p className="mb-4">📧 <a href="mailto:tapiceriaach@hotmail.com" className="text-red-700 hover:underline">tapiceriaach@hotmail.com</a></p>
        <p className="mb-4">🕐 Lunes a Viernes de 09hs a 17hs.</p>
        <a
          href="https://wa.me/34638746788"
          className="bg-[#b91c1c] text-white px-6 py-3 rounded hover:bg-[#991b1b] transition-colors"
        >
          Contactar por WhatsApp
        </a>
      </section>
    </div>
  )
}