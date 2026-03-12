'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // offset navbar
      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-red-500 font-bold text-xl">Tapicería Pérez</div>
        <div className="space-x-6 hidden md:flex">
          {['inicio', 'servicios', 'galeria', 'contacto'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:text-red-500 transition-colors ${
                active === id ? 'text-red-500 font-semibold' : 'text-white'
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}