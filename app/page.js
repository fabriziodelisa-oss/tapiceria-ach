'use client'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Sección Inicio */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
        <h1 className="text-5xl font-bold text-red-500 mb-4">Tapicería ACH+</h1>
        <p className="text-xl text-white max-w-xl text-center">
          Restauración y tapizado profesional de sofás, sillas y coches en Tenerife.
        </p>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
        <h2 className="text-4xl font-bold text-red-500 mb-6">Servicios</h2>
        <ul className="space-y-3 text-lg text-white text-center">
          <li>Tapizado de sofás y sillones</li>
          <li>Tapizado de sillas y muebles</li>
          <li>Tapizado de interiores de coches</li>
          <li>Restauración y reparación de tejidos</li>
        </ul>
      </section>

      {/* Sección Galería */}
      <section id="galeria" className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
        <h2 className="text-4xl font-bold text-red-500 mb-6">Galería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="../public/images/sillon.jpg" alt="Tapizado Sofá" className="h-40 w-full object-cover" loading="lazy" />
          <img src="../public/images/sofa.jpg" alt="Tapizado Sillón" className="h-40 w-full object-cover" loading="lazy" />
          <img src="../public/images/telas.jpg" alt="Tapizado Coche" className="h-40 w-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
        <h2 className="text-4xl font-bold text-red-500 mb-6">Contacto</h2>
        <p className="mb-4">📍 Calle Olimpia Nº57, Costa del silencio. Tenerife</p>
        <p className="mb-4">📞 <a href="tel:+34638746788" className="text-red-500 hover:underline">+34 638 74 67 88</a></p>
        <p className="mb-4">📧 <a href="tapiceriaach@hotmail.com" className="text-red-500 hover:underline">tapiceriaach@hotmail.com</a></p>
        <a
          href="https://wa.me/34638746788"
          className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition-colors"
        >
          Contactar por WhatsApp
        </a>
      </section>
    </div>
  )
}