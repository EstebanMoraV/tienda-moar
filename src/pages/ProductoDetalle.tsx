// src/pages/ProductoDetalle.tsx
import { useMemo } from 'react'
import { useNavigate, useParams, useOutletContext } from 'react-router-dom'
import { productos, Product } from '../assets/products'
import { useCart } from '../context/CartContext'

type OutletCtx = { showToast: (msg: string) => void }

export default function ProductoDetalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { add } = useCart()
  const outletCtx = useOutletContext<OutletCtx | null>()
  const showToast = outletCtx?.showToast

  const product: Product | undefined = useMemo(
    () => productos.find((p) => String(p.id) === String(id)),
    [id]
  )

  if (!product) {
    return (
      <div className="container py-5">
        <h3>Producto no encontrado</h3>
        <button className="btn btn-outline-secondary mt-3" onClick={() => navigate('/productos')}>
          Volver a productos
        </button>
      </div>
    )
  }

  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <img className="img-fluid rounded shadow-sm" src={product.imagen} alt={product.nombre} />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="mb-2">{product.nombre}</h2>
          <p className="text-muted">{product.brand}</p>
          <p className="fs-4 fw-semibold text-primary">{product.precio}</p>
          <p className="mt-3">{product.descripcion}</p>
          <div className="d-flex gap-2 mt-4">
            <button
              className="btn btn-primary"
              onClick={() => {
                add(product)
                if (showToast) showToast(`✅ ${product.nombre} agregado al carrito`)
                else alert('Producto agregado al carrito')
              }}
            >
              Añadir al carrito
            </button>
            <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


