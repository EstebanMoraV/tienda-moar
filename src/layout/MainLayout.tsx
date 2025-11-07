import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Encabezado fijo arriba */}
      <Header />

      {/* Contenido principal con margen */}
      <main className="flex-grow-1 container py-4">
        <Outlet /> {/* Aquí se renderizan las páginas hijas - outlet sirve para que las rutas anidadas se muestren aquí */}
      </main>

      {/* Pie de página fijo abajo */}
      <Footer />
    </div>
  )
}
