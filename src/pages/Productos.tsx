import apple1 from '../assets/images/productos/apple/iPhone 13 Pro azul medianoche-128gb/iphone-13-azul-medianoche-2_1.jpg'
import apple2 from '../assets/images/productos/apple/iPhone 14 Medianoche-128GB/iphone_14_midnight_pdp_image_position-1b_cles_1.jpg'
import apple3 from '../assets/images/productos/apple/iPhone 16 Pro Max Desierto-256 GB/iphone_16_pro_max_desert_titanium_pdp_image_position_1__gens.jpg'

import samsung1 from '../assets/images/productos/samsung/Samsung A06 128 GB Black/sm-a065mzkgltl_1.jpg'
import samsung2 from '../assets/images/productos/samsung/Samsung Galaxy A56 5G 256 GB - Negro/sm-a566ezkcltl_0_1.jpg'
import samsung3 from '../assets/images/productos/samsung/Samsung Galaxy S25 Ultra 256 GB Titanium Black/sm-s938bakkltl_1_2.jpg'

import xiaomi1 from '../assets/images/productos/xiaomi/Xiaomi Redmi Note 14 Pro 256GB/o16-black-1200x1200-back_front_2.jpg'
import xiaomi2 from '../assets/images/productos/xiaomi/Xiaomi Redmi 13C 5G - 256 GB/google_shopping_-xiaomi_redmi_13c_5g-_v_1_1_.jpg'
import xiaomi3 from '../assets/images/productos/xiaomi/Xiaomi 14T 512GB Black/gs-xiaomi_14t_black-_v_1_1.jpg'


const productos = [
  {
    id: 1,
    nombre: 'iPhone 13 Pro Azul Medianoche (128GB)',
    precio: '$899.990',
    descripcion: 'Potente chip A15 Bionic, pantalla Super Retina XDR y diseño elegante en azul medianoche.',
    imagen: apple1,
  },
  {
    id: 2,
    nombre: 'iPhone 14 Medianoche (128GB)',
    precio: '$949.990',
    descripcion: 'Rendimiento mejorado, cámara avanzada y seguridad con detección de accidentes.',
    imagen: apple2,
  },
  {
    id: 3,
    nombre: 'iPhone 16 Pro Max Desierto (256GB)',
    precio: '$1.499.990',
    descripcion: 'Titanio desértico, chip A18 Pro y cámara tetraprisma para zoom óptico de 5x.',
    imagen: apple3,
  },
  {
    id: 4,
    nombre: 'Samsung Galaxy A06 (128GB)',
    precio: '$129.990',
    descripcion: 'Pantalla HD+ de 6.5", batería de larga duración y diseño moderno.',
    imagen: samsung1,
  },
  {
    id: 5,
    nombre: 'Samsung Galaxy A56 5G (256GB)',
    precio: '$299.990',
    descripcion: 'Conectividad 5G, cámara triple y pantalla AMOLED de 6.6".',
    imagen: samsung2,
  },
  {
    id: 6,
    nombre: 'Samsung Galaxy S25 Ultra (256GB)',
    precio: '$1.299.990',
    descripcion: 'Zoom 100x, S Pen integrado y rendimiento de gama alta con Snapdragon 8 Gen 3.',
    imagen: samsung3,
  },
  {
    id: 7,
    nombre: 'Xiaomi Redmi Note 14 Pro (256GB)',
    precio: '$349.990',
    descripcion: 'Cámara de 200MP, carga rápida de 120W y pantalla AMOLED de 120Hz.',
    imagen: xiaomi1,
  },
  {
    id: 8,
    nombre: 'Xiaomi Redmi 13C 5G - 256 GB',
    precio: '$799.990',
    descripcion: 'Cámara Leica, Snapdragon 8 Gen 2 y diseño premium en cerámica.',
    imagen: xiaomi2,
  },
  {
    id: 9,
    nombre: 'Xiaomi 14T Black (512GB)',
    precio: '$899.990',
    descripcion: 'Pantalla CrystalRes AMOLED, HyperOS y cámara triple de 50MP.',
    imagen: xiaomi3,
  },
]

export default function Productos() {
  return (
    <div className="container">
      <h1 className="mb-4">Todos los productos</h1>
      <div className="row">
        {productos.map(producto => (
          <div key={producto.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="fw-bold text-primary">{producto.precio}</p>
                <button className="btn btn-outline-primary w-100">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
