import imagenNosotros from '../assets/images/logo_marcas/Moar3.jpg'


export default function Nosotros() {
  return (
    <div className="container py-5">
      {/* Mensaje de bienvenida */}
      <div className="text-center mb-4">
        <h1 className="mb-3">Bienvenido a MoAr</h1>
        <p className="lead">
          Tu tienda en línea de confianza para productos electrónicos de alta calidad. Nos apasiona ofrecerte lo mejor en tecnología y accesorios.
        </p>
      </div>

      {/* Imagen central (puedes reemplazar la ruta luego) */}
      <div className="text-center mb-5">
        <img
          src={imagenNosotros}
          alt="Imagen representativa de MoAr"
          className="img-fluid rounded shadow"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>

      {/* Texto institucional */}
      <div className="mx-auto" style={{ maxWidth: '800px' }}>
        <p className="fs-5">
          En MoAr, nos esforzamos por brindarte una experiencia de compra excepcional, con un catálogo cuidadosamente seleccionado y un servicio al cliente dedicado. Contamos con una amplia gama de productos. Marcas reconocidas como: <strong>Apple, Samsung, Xiaomi, Motorola</strong> y muchas más.
        </p>
        <p className="fs-5">
          Nuestra misión es hacer que la tecnología sea accesible para todos, ofreciendo productos innovadores a precios competitivos. Valoramos la confianza de nuestros clientes y nos comprometemos a superar sus expectativas en cada compra.
        </p>
        <p className="fs-5">
          Gracias por elegirnos. ¡Esperamos que disfrutes de tu experiencia de compra con nosotros!
        </p>
      </div>
    </div>
  )
}
