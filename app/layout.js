import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TopBar from "./components/TopBar"

export const metadata = {
  title: 'Tapicería ACH',
  description: 'Restauración y tapizado profesional de coches y muebles en Tenerife',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white scroll-smooth">
        <TopBar />
        {/* <Navbar /> */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}