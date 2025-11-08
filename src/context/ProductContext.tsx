import { createContext, useContext, useEffect, useState } from "react";
import { productos as initialProducts, Product } from "../assets/products";

interface ProductContextType {
  products: Product[];
  addProduct: (p: Product) => void;
  deleteProduct: (id: number) => void;
  updateProduct: (p: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  // Cargar desde localStorage o fallback a los iniciales
  useEffect(() => {
    const saved = localStorage.getItem("products-db");
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(initialProducts);
    }
  }, []);

  // Guardar cambios
  useEffect(() => {
    localStorage.setItem("products-db", JSON.stringify(products));
  }, [products]);

  const addProduct = (p: Product) => {
    setProducts(prev => [...prev, p]);
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const updateProduct = (product: Product) => {
    setProducts(prev => prev.map(p => (p.id === product.id ? product : p)));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProducts debe usarse dentro de ProductProvider");
  return ctx;
}
