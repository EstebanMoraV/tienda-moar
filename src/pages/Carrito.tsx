import { useCart } from '../context/CartContext'

const fmtCLP = (n: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(n)

export default function Carrito() {
  const { state, add, removeOne, removeLine, clear, subtotal } = useCart()
  const lines = Object.values(state.items)

  if (lines.length === 0) {
    return (
      <div className="container py-5">
        <h2 className="mb-3">Tu carrito</h2>
        <p className="text-muted">Aún no has agregado productos.</p>
      </div>
    )
  }

  return (
    <div className="container py-4">
      <h2 className="mb-3">Tu carrito</h2>

      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Producto</th>
              <th className="text-center" style={{ width: 160 }}>Cantidad</th>
              <th className="text-end">Precio</th>
              <th className="text-end">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lines.map(({ product, qty }) => (
              <tr key={product.id}>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <img src={product.imagen} alt={product.nombre} style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 8 }} />
                    <div>
                      <div className="fw-semibold">{product.nombre}</div>
                      <div className="text-muted" style={{ fontSize: 12 }}>{product.brand}</div>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <div className="btn-group" role="group">
                    <button className="btn btn-outline-secondary" onClick={() => removeOne(product.id)}>-</button>
                    <button className="btn btn-outline-secondary disabled">{qty}</button>
                    <button className="btn btn-outline-secondary" onClick={() => add(product)}>+</button>
                  </div>
                </td>
                <td className="text-end">{fmtCLP(product.precioNum ?? 0)}</td>
                <td className="text-end">{fmtCLP((product.precioNum ?? 0) * qty)}</td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-danger" onClick={() => removeLine(product.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}></td>
              <td className="text-end fw-semibold">Total</td>
              <td className="text-end fw-bold">{fmtCLP(subtotal)}</td>
              <td className="text-end">
                <button className="btn btn-sm btn-outline-secondary" onClick={clear}>Vaciar</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-primary">Proceder al pago</button>
      </div>
    </div>
  )
}
