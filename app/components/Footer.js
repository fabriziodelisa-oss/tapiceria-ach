'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">

        {/* Mapa */}
        <div className="w-full md:w-1/2 h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.836586504514!2d-16.6386632!3d28.029470000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a99ebcc39ed23%3A0xb6b1f27dcbdf3641!2sTapicer%C3%ADa%20ACH%2B%20TOLNAUTIC!5e0!3m2!1ses-419!2ses!4v1773324099022!5m2!1ses-419!2ses"
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