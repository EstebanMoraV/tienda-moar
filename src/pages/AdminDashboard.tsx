import { useAuth } from '../context/AuthContext'

export default function AdminDashboard() {
  const { isAdmin } = useAuth()
  return (
    <div className="container py-4">
      <h2>Panel Admin</h2>
      <p className="text-muted">Estado: {isAdmin ? 'Autenticado' : 'No autorizado'}</p>
      <hr />
      <p>Pronto: CRUD de productos, marcas, pedidos…</p>
    </div>
  )
}
