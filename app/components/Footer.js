'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">

        {/* Mapa */}
        <div className="w-full md:w-1/2 h-64">
          <iframe
            src="https://www.google.com/maps?q=Santa+Cruz+de+Tenerife&output=embed"
            width="100%"
            height="100%"
            className="rounded"
            loading="lazy"
          ></iframe>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-red-500 font-semibold">Secciones</h4>
          <a href="#inicio" className="hover:text-red-500 transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-red-500 transition-colors">Servicios</a>
          <a href="#galeria" className="hover:text-red-500 transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-red-500 transition-colors">Contacto</a>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-6">
        © {new Date().getFullYear()} Tapicería ACH+. Todos los derechos reservados.
      </div>
    </footer>
  )
}