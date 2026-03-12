'use client'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Sección Inicio */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
        <h1 className="text-5xl font-bold text-red-700 mb-4">Tapicería ACH+</h1>
        <p className="text-xl text-white max-w-xl text-center">
          Restauración y tapizado del hogar y coches.
        </p>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="min-h-screen flex flex-col justify-center items-center bg-slate-800 text-white px-4">
        <h2 className="text-4xl font-bold text-red-700 mb-6">Servicios</h2>
        <ul className="space-y-3 text-lg text-white text-center">
          <li>Tapizado y reparacion de:</li>
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
          <img src="/images/cabecero.jpg" alt="Cabecero cama" className="h-40 w-full object-cover" loading="lazy" />
          <img src="/images/cambio.png" alt="Tapizado techo coche" className="h-40 w-full object-cover" loading="lazy" />
          <img src="/images/sofa2.jpg" alt="Tapizado sofa" className="h-40 w-full object-cover" loading="lazy" />
          <img src="/images/volante.jpg" alt="Tapizado Coche volante" className="h-40 w-full object-cover" loading="lazy" />
          <img src="/images/volante2.jpg" alt="Tapizado Coche volante" className="h-40 w-full object-cover" loading="lazy" />
        
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
        <h2 className="text-4xl font-bold text-red-700 mb-6">Contacto</h2>
        <p className="mb-4">📍 Calle Olimpia Nº57, Costa del silencio. Tenerife</p>
        <p className="mb-4">📞 <a href="tel:+34638746788" className="text-red-700 hover:underline">+34 638 74 67 88</a></p>
        <p className="mb-4">📧 <a href="tapiceriaach@hotmail.com" className="text-red-700 hover:underline">tapiceriaach@hotmail.com</a></p>
        <p className="mb-4"> Lunes a Viernes de 09hs a 17hs.</p>
        <a
          href="https://wa.me/34638746788"
          className="bg-red-700 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors"
        >
          Contactar por WhatsApp
        </a>
      </section>
    </div>
  )
}