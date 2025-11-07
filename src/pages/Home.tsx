// Importa tus banners desde src/assets/images/banner/
import banner1 from '../assets/images/banner/banner1.jpg'
import banner2 from '../assets/images/banner/banner2.jpg'
import banner3 from '../assets/images/banner/banner3.jpg'
import banner4 from '../assets/images/banner/banner4.png'

// Importa imágenes de productos desde src/assets/images/productos/
import producto1 from '../assets/images/productos/apple/iPhone 16 Pro Max Desierto-256 GB/iphone_16_pro_max_desert_titanium_pdp_image_position_1__gens.jpg'
import producto2 from '../assets/images/productos/xiaomi/Xiaomi 14T 512GB Black/gs-xiaomi_14t_black-_v_1_1.jpg'
import producto3 from '../assets/images/productos/samsung/Samsung Galaxy S25 Ultra 256 GB Titanium Black/sm-s938bakkltl_1_2.jpg'
import producto4 from '../assets/images/productos/motorola/Motorola G35 128 GB Negro/01_motog35-5g_negro_.png'
import producto5 from '../assets/images/productos/honor/Honor X6B 256 GB Black/honor_-_x6b_5g_black_0_2.jpg'

export default function Home() {
  const banners = [banner1, banner2, banner3, banner4]

  const productosDestacados = [
    { id: 1, nombre: 'iPhone 16 Pro Max Desierto-256 GB', precio: '$1.000.000', imagen: producto1 },
    { id: 2, nombre: 'Xiaomi 14T 512GB Black', precio: '$690.990', imagen: producto2 },
    { id: 3, nombre: 'Samsung Galaxy S25 Ultra 256 GB Titanium Black', precio: '$1.200.000', imagen: producto3 },
    { id: 4, nombre: 'Motorola G35 128 GB Negro', precio: '$299.990', imagen: producto4 },
    { id: 5, nombre: 'Honor X6B 256 GB Black', precio: '$399.990', imagen: producto5 },
  ]

  return (
    <div className="container">
      <h1 className="mb-4">Bienvenido a TiendaMoAr 🛍️</h1>

      {/* Carrusel */}
      <div
        id="carouselBanner"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="hover"
        style={{ maxHeight: '400px', overflow: 'hidden' }}
      >
        <div className="carousel-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselBanner"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {banners.map((imagen, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={imagen}
                className="d-block w-100"
                alt={`Banner ${index + 1}`}
                style={{ objectFit: 'cover', height: '400px' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>Promoción {index + 1}</h5>
                <p>Descubre nuestras ofertas exclusivas</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBanner"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselBanner"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Productos destacados */}
      <h2 className="mb-4">Productos destacados</h2>
      <div className="row">
        {productosDestacados.map(producto => (
          <div key={producto.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.precio}</p>
                <button className="btn btn-outline-primary w-100">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
