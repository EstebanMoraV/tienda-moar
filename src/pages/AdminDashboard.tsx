import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { Product } from "../assets/products";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { isAdmin } = useAuth();
  const { products, addProduct, deleteProduct, updateProduct } = useProducts();

  const [editing, setEditing] = useState<Product | null>(null);

  const emptyForm: Product = {
    id: Date.now(),
    nombre: "",
    brand: "Apple",
    descripcion: "",
    precio: "",
    imagen: "",
  };

  const [form, setForm] = useState<Product>(emptyForm);

  if (!isAdmin) {
    return (
      <div className="container py-4">
        <h2>No autorizado</h2>
        <p className="text-muted">Debes iniciar sesión como administrador.</p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editing) {
      updateProduct(form);
      setEditing(null);
    } else {
      addProduct(form);
    }

    setForm(emptyForm);
  };

  const handleEdit = (product: Product) => {
    setEditing(product);
    setForm(product);
  };

  return (
    <div className="container py-4">
      <h2>Panel Administrativo</h2>
      <p className="text-muted">Gestión completa de productos</p>

      <hr />

      {/* FORMULARIO */}
      <h4>{editing ? "Editar producto" : "Agregar producto"}</h4>
      <form onSubmit={handleSubmit} className="row g-3 mb-4">

        <div className="col-md-4">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            required
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Marca</label>
          <select
            className="form-select"
            value={form.brand}
            onChange={(e) => setForm({ ...form, brand: e.target.value })}
          >
            <option>Apple</option>
            <option>Samsung</option>
            <option>Xiaomi</option>
          </select>
        </div>

        <div className="col-md-3">
          <label className="form-label">Precio</label>
          <input
            type="text"
            className="form-control"
            value={form.precio}
            onChange={(e) => setForm({ ...form, precio: e.target.value })}
            required
          />
        </div>

        <div className="col-md-12">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            value={form.descripcion}
            onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
            required
          ></textarea>
        </div>

        <div className="col-md-12">
          <label className="form-label">
            URL de imagen (por ahora solo URL externa)
          </label>
          <input
            type="text"
            className="form-control"
            value={form.imagen}
            onChange={(e) => setForm({ ...form, imagen: e.target.value })}
            required
          />
        </div>

        <div className="col-md-12">
          <button className="btn btn-primary">
            {editing ? "Guardar cambios" : "Agregar producto"}
          </button>
          {editing && (
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => {
                setEditing(null);
                setForm(emptyForm);
              }}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      <hr />

      {/* LISTA DE PRODUCTOS */}
      <h4>Productos registrados</h4>

      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 col-lg-3 mb-3">
            <div className="card h-100">
              <img
                src={p.imagen}
                className="card-img-top"
                alt={p.nombre}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <p className="text-muted">{p.brand}</p>
                <p className="fw-bold">{p.precio}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-sm btn-warning" onClick={() => handleEdit(p)}>
                  Editar
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(p.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
