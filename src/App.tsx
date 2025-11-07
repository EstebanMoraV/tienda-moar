import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/ProductoDetalle'
import Carrito from './pages/Carrito'
import Login from './pages/Login'
import ProtectedRoute from './routes/ProtectedRoute'
import AdminDashboard from './pages/AdminDashboard'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="productos" element={<Productos />} />
        <Route path="producto/:id" element={<ProductoDetalle />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="login" element={<Login />} />
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<div className="container py-5">404</div>} />
    </Routes>
  )
}
