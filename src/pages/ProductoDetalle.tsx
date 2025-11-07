import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productos } from '../assets/products'

export default function ProductoDetalle() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = useMemo(
    () => productos.find((p) => String(p.id) === String(id)),
    [id]
  )

  if (!product) {
    return <div className="container py-5">Producto no encontrado.</div>
  }

  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* IMAGEN */}
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded"
            src={product.imagen}
            alt={product.nombre}
          />
        </div>

        {/* INFORMACIÓN */}
        <div className="col-12 col-md-6">
          <h2 className="mb-2">{product.nombre}</h2>
          <p className="text-muted">{product.brand}</p>
          <p className="fs-4 fw-semibold">{product.precio}</p>
          <p>{product.descripcion}</p>

          <div className="d-flex gap-2 mt-3">
            <button
              className="btn btn-primary"
              onClick={() => alert('Agregado al carrito (scaffold)')}
            >
              Añadir al carrito
            </button>

            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate(-1)}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

