// src/pages/Productos.tsx
import { useCallback, useMemo, useState } from 'react'
import { Link, useLocation, useOutletContext } from 'react-router-dom'
import { productos, Product } from '../assets/products'
import { useCart } from '../context/CartContext'

// Contexto que viene desde MainLayout -> <Outlet context={{ showToast }}>
type OutletCtx = { showToast: (msg: string) => void }

// Normaliza texto (sin mayúsculas, sin tildes, espacios de más)
const norm = (s: string) =>
  s.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

export default function Productos() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const q = params.get('q') ?? ''
  const qn = norm(q)

  const { add } = useCart()
  const { showToast } = useOutletContext<OutletCtx>()   // 👈 aquí tomamos el toast

  const [brand, setBrand] = useState<'All' | Product['brand']>('All')
  const handleBrand = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value as any)
  }, [])

  const filtered = useMemo(() => {
    let out = productos
    if (brand !== 'All') out = out.filter(p => p.brand === brand)
    if (qn) {
      out = out.filter(p => {
        const name = norm(p.nombre)
        const br = norm(p.brand)
        return name.includes(qn) || br.includes(qn)
      })
    }
    return out
  }, [brand, qn])

  const showEmptyState = qn.length > 0 && filtered.length === 0

  return (
    <div className="container py-4">
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
        <select className="form-select w-auto" value={brand} onChange={handleBrand}>
          <option value="All">Todas</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Xiaomi">Xiaomi</option>
        </select>
        {q && <span className="text-muted">Búsqueda: “{q}”</span>}
      </div>

      {showEmptyState ? (
        <p className="text-muted">No se encontraron productos para “{q}”.</p>
      ) : (
        <div className="row">
          {filtered.map(producto => (
            <div key={producto.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-1">{producto.nombre}</h5>
                  <p className="text-muted mb-2">{producto.brand}</p>
                  <p className="card-text">{producto.descripcion}</p>
                  <p className="fw-bold text-primary">{producto.precio}</p>

                  <div className="mt-auto d-grid gap-2">
                    <Link to={`/producto/${producto.id}`} className="btn btn-outline-secondary">
                      Ver más
                    </Link>

                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        add(producto)
                        showToast(`✅ ${producto.nombre} agregado al carrito`)
                      }}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {!filtered.length && <p className="text-muted">No hay productos.</p>}
        </div>
      )}
    </div>
  )
}
