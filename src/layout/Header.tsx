// src/layout/Header.tsx
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../components/molecules/SearchBar'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const navigate = useNavigate()
  const { isAdmin, logout } = useAuth()

  return (
    <header className="bg-dark border-bottom">
      <div className="container-fluid py-2">
        <div className="d-flex justify-content-between align-items-center text-white gap-3">

          {/* 🛍️ Izquierda: Logo */}
          <div className="fw-bold fs-4">
            <Link to="/" className="text-decoration-none text-white">
              TiendaMoAr
            </Link>
          </div>

          {/* 🔎 Centro: Search */}
          <div className="flex-grow-1 d-none d-md-block">
            <SearchBar placeholder="Buscar modelo o marca..." />
          </div>

          {/* 🔗 Navegación (oculto en mobile) */}
          <nav className="d-none d-lg-flex gap-3">
            <Link to="/" className="nav-link text-white">Inicio</Link>
            <Link to="/productos" className="nav-link text-white">Productos</Link>
            <Link to="/blog" className="nav-link text-white">Blog</Link>
            <Link to="/nosotros" className="nav-link text-white">Nosotros</Link>
            <Link to="/contacto" className="nav-link text-white">Contacto</Link>
          </nav>

          {/* 🛒 / 🔑 Derecha */}
          <div className="d-flex gap-2">
            <Link to="/carrito" className="btn btn-outline-light">🛒 Carrito</Link>

            {isAdmin ? (
              <>
                <Link to="/admin" className="btn btn-warning">Panel</Link>
                <button className="btn btn-outline-light" onClick={() => { logout(); navigate('/'); }}>
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-outline-light">Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

