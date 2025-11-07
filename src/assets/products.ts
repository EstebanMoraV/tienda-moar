// src/assets/products.ts

// ====== IMPORTS DE IMÁGENES (ajusta si algún nombre no coincide exactamente) ======
import apple1 from './images/productos/apple/iPhone 13 Pro azul medianoche-128gb/iphone-13-azul-medianoche-2_1.jpg'
import apple2 from './images/productos/apple/iPhone 14 Medianoche-128GB/iphone_14_midnight_pdp_image_position-1b_cles_1.jpg'
import apple3 from './images/productos/apple/iPhone 16 Pro Max Desierto-256 GB/iphone_16_pro_max_desert_titanium_pdp_image_position_1__gens.jpg'

import samsung1 from './images/productos/samsung/Samsung A06 128 GB Black/sm-a065mzkgltl_1.jpg'
import samsung2 from './images/productos/samsung/Samsung Galaxy A56 5G 256 GB - Negro/sm-a566ezkcltl_0_1.jpg'
import samsung3 from './images/productos/samsung/Samsung Galaxy S25 Ultra 256 GB Titanium Black/sm-s938bakkltl_1_2.jpg'

import xiaomi1 from './images/productos/xiaomi/Xiaomi Redmi Note 14 Pro 256GB/o16-black-1200x1200-back_front_2.jpg'
import xiaomi2 from './images/productos/xiaomi/Xiaomi Redmi 13C 5G - 256 GB/google_shopping_-xiaomi_redmi_13c_5g-_v_1_1_.jpg'
import xiaomi3 from './images/productos/xiaomi/Xiaomi 14T 512GB Black/gs-xiaomi_14t_black-_v_1_1.jpg'

// ====== TIPOS ======
export type Brand = 'Apple' | 'Samsung' | 'Xiaomi'

export type Product = {
  id: number
  brand: Brand
  nombre: string
  precio: string        // Para mostrar
  precioNum: number     // Para cálculos (carrito, totales, etc.)
  descripcion: string
  imagen: string
}

// ====== DATA ======
export const productos: Product[] = [
  {
    id: 1,
    brand: 'Apple',
    nombre: 'iPhone 13 Pro Azul Medianoche (128GB)',
    precio: '$899.990',
    precioNum: 899990,
    descripcion:
      'Potente chip A15 Bionic, pantalla Super Retina XDR y diseño elegante en azul medianoche.',
    imagen: apple1,
  },
  {
    id: 2,
    brand: 'Apple',
    nombre: 'iPhone 14 Medianoche (128GB)',
    precio: '$949.990',
    precioNum: 949990,
    descripcion:
      'Rendimiento mejorado, cámara avanzada y seguridad con detección de accidentes.',
    imagen: apple2,
  },
  {
    id: 3,
    brand: 'Apple',
    nombre: 'iPhone 16 Pro Max Desierto (256GB)',
    precio: '$1.499.990',
    precioNum: 1499990,
    descripcion:
      'Titanio desértico, chip A18 Pro y cámara tetraprisma para zoom óptico de 5x.',
    imagen: apple3,
  },

  {
    id: 4,
    brand: 'Samsung',
    nombre: 'Samsung Galaxy A06 (128GB)',
    precio: '$129.990',
    precioNum: 129990,
    descripcion:
      'Pantalla HD+ de 6.5", batería de larga duración y diseño moderno.',
    imagen: samsung1,
  },
  {
    id: 5,
    brand: 'Samsung',
    nombre: 'Samsung Galaxy A56 5G (256GB)',
    precio: '$299.990',
    precioNum: 299990,
    descripcion:
      'Conectividad 5G, cámara triple y pantalla AMOLED de 6.6".',
    imagen: samsung2,
  },
  {
    id: 6,
    brand: 'Samsung',
    nombre: 'Samsung Galaxy S25 Ultra (256GB)',
    precio: '$1.299.990',
    precioNum: 1299990,
    descripcion:
      'Zoom 100x, S Pen integrado y rendimiento de gama alta con Snapdragon 8 Gen 3.',
    imagen: samsung3,
  },

  {
    id: 7,
    brand: 'Xiaomi',
    nombre: 'Xiaomi Redmi Note 14 Pro (256GB)',
    precio: '$349.990',
    precioNum: 349990,
    descripcion:
      'Cámara de 200MP, carga rápida de 120W y pantalla AMOLED de 120Hz.',
    imagen: xiaomi1,
  },
  {
    id: 8,
    brand: 'Xiaomi',
    nombre: 'Xiaomi Redmi 13C 5G - 256 GB',
    precio: '$799.990',
    precioNum: 799990,
    descripcion:
      'Cámara Leica, Snapdragon 8 Gen 2 y diseño premium en cerámica.',
    imagen: xiaomi2,
  },
  {
    id: 9,
    brand: 'Xiaomi',
    nombre: 'Xiaomi 14T Black (512GB)',
    precio: '$899.990',
    precioNum: 899990,
    descripcion:
      'Pantalla CrystalRes AMOLED, HyperOS y cámara triple de 50MP.',
    imagen: xiaomi3,
  },
]

// ====== HELPERS ÚTILES (opcionales) ======
export const getProductById = (id: number) =>
  productos.find((p) => p.id === id)

export const searchProducts = (q: string, brand?: Brand) => {
  const query = q.trim().toLowerCase()
  return productos.filter((p) => {
    const matchesBrand = brand ? p.brand === brand : true
    const matchesText =
      !query ||
      p.nombre.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query)
    return matchesBrand && matchesText
  })
}
