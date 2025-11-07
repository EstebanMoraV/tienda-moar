import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../components/molecules/SearchBar'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

export default function Header() {
  const navigate = useNavigate()
  const { isAdmin, logout } = useAuth()
  const { totalItems } = useCart()

  return (
    <header className="bg-dark border-bottom">
      <div className="container-fluid py-2">
        <div className="d-flex justify-content-between align-items-center text-white gap-3">

          <div className="fw-bold fs-4">
            <Link to="/" className="text-decoration-none text-white">
              TiendaMoAr
            </Link>
          </div>

          <div className="flex-grow-1 d-none d-md-block">
            <SearchBar placeholder="Buscar modelo o marca..." />
          </div>

          <nav className="d-none d-lg-flex gap-3">
            <Link to="/" className="nav-link text-white">Inicio</Link>
            <Link to="/productos" className="nav-link text-white">Productos</Link>
            <Link to="/blog" className="nav-link text-white">Blog</Link>
            <Link to="/nosotros" className="nav-link text-white">Nosotros</Link>
            <Link to="/contacto" className="nav-link text-white">Contacto</Link>
          </nav>

          <div className="d-flex align-items-center gap-2">
            <Link to="/carrito" className="btn btn-outline-light position-relative">
              🛒 Carrito
              {totalItems > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: 12 }}
                >
                  {totalItems}
                </span>
              )}
            </Link>

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


