// src/pages/Home.tsx
import { useMemo } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { productos, Product } from '../assets/products'

// Banners
import banner1 from '../assets/images/banner/banner1.jpg'
import banner2 from '../assets/images/banner/banner2.jpg'
import banner3 from '../assets/images/banner/banner3.jpg'
import banner4 from '../assets/images/banner/banner4.png'

// Contexto que entrega MainLayout vía <Outlet context={{ showToast }}>
type OutletCtx = { showToast: (msg: string) => void }

export default function Home() {
  const banners = [banner1, banner2, banner3, banner4]

  // carrito + toast
  const { add } = useCart()
  const { showToast } = useOutletContext<OutletCtx>()

  // Elegimos destacados directamente desde el catálogo global
  // solo Apple y Samsung (evitamos Motorola/Honor que no están en products.ts)
  // Puedes ajustar el orden/ids a gusto:
  
  const featuredIds = [3, 6, 1, 5] // (Apple 16 Pro Max, Samsung S25 Ultra, iPhone 13 Pro, Samsung A56)
  const destacados: Product[] = useMemo(() => {
    const set = new Set(featuredIds)
    return productos
      .filter(p => (p.brand === 'Apple' || p.brand === 'Samsung') && set.has(p.id))
      // por si falta alguno, igual mostramos los primeros Apple/Samsung
      .concat(
        productos.filter(p => p.brand === 'Apple' || p.brand === 'Samsung')
      )
      .filter((p, idx, arr) => arr.findIndex(x => x.id === p.id) === idx) // únicos
      .slice(0, 8) // máximo 8 destacados
  }, [])

  return (
    <div className="container">
      <h1 className="mb-4">Bienvenido a TiendaMoAr 🛍️</h1>

      {/* Carrusel */}
      <div
        id="carouselBanner"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="hover"
        style={{ maxHeight: '400px', overflow: 'hidden' }}
      >
        <div className="carousel-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselBanner"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {banners.map((imagen, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={imagen}
                className="d-block w-100"
                alt={`Banner ${index + 1}`}
                style={{ objectFit: 'cover', height: '400px' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>Promoción {index + 1}</h5>
                <p>Descubre nuestras ofertas exclusivas</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBanner"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselBanner"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Productos destacados */}
      <h2 className="mb-4">Productos destacados</h2>
      <div className="row">
        {destacados.map((p) => (
          <div key={p.id} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={p.imagen}
                className="card-img-top"
                alt={p.nombre}
                style={{ objectFit: 'cover', height: 220 }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="text-muted mb-1">{p.brand}</h6>
                <h5 className="card-title mb-1">{p.nombre}</h5>
                <p className="fw-bold text-primary">{p.precio}</p>

                <div className="mt-auto d-grid gap-2">
                  <Link to={`/producto/${p.id}`} className="btn btn-outline-secondary">
                    Ver más
                  </Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      add(p)
                      showToast(`✅ ${p.nombre} agregado al carrito`)
                    }}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {!destacados.length && (
          <p className="text-muted">Pronto agregaremos productos destacados.</p>
        )}
      </div>
    </div>
  )
}
