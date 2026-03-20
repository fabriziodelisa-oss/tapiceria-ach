import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TopBar from './components/TopBar'
import HeightWatcher from './components/HeightWatcher'

export const metadata = {
  title: 'Tapicería ACH',
  description: 'Restauración y tapizado profesional de coches y muebles en Tenerife',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white scroll-smooth">
        <TopBar />
        <HeightWatcher />
        <Navbar />
        {/* pt = altura topbar (~76px) + altura navbar (~52px) */}
        <main className="pt-[128px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
