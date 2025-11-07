import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-dark border-bottom">
      <div className="container-fluid py-2">
        <div className="d-flex justify-content-between align-items-center text-white">
          {/* 🛍️ Izquierda: Logo */}
          <div className="fw-bold fs-4">
            <Link to="/" className="text-decoration-none text-white">
              TiendaMoAr
            </Link>
          </div>

          {/* 🔗 Centro: Navegación */}
          <nav className="d-none d-md-flex gap-3">
            <Link to="/" className="nav-link text-white">Inicio</Link>
            <Link to="/productos" className="nav-link text-white">Productos</Link>
            <Link to="/blog" className="nav-link text-white">Blog</Link>
            <Link to="/nosotros" className="nav-link text-white">Nosotros</Link>
            <Link to="/contacto" className="nav-link text-white">Contacto</Link>
          </nav>

          {/* 🛒 Derecha: Carrito */}
          <div>
            <Link to="/carrito" className="btn btn-outline-light">
              🛒 Carrito
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
