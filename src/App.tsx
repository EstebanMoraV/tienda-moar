// src/App.tsx  (o src/routes/App.tsx)
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Carrito from "./pages/Carrito";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Blog from './pages/Blog'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Todas las páginas van dentro del MainLayout */}
<Route path="/" element={<MainLayout />}>
  <Route index element={<Home />} />
  <Route path="productos" element={<Productos />} />
  <Route path="producto/:id" element={<ProductoDetalle />} />
  <Route path="carrito" element={<Carrito />} />
  <Route path="login" element={<Login />} />
  <Route path="blog" element={<Blog />} />
  <Route
    path="admin"
    element={
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    }
  />
</Route>


      {/* Página 404 */}
      <Route path="*" element={<div className="container py-5">404 - Página no encontrada</div>} />
    </Routes>
  );
}

