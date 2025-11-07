export default function Nosotros() {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="mb-1">Nosotros</h1>
        <p className="text-muted">Conectamos a las personas con la tecnología que necesitan.</p>
      </header>

      {/* Misión / Visión */}
      <section className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="p-4 border rounded-3 h-100">
            <h4 className="mb-2">Nuestra misión</h4>
            <p className="mb-0 text-muted">
              Ofrecer una experiencia simple, transparente y confiable para comprar smartphones,
              con asesoría clara y soporte que realmente ayuda.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 border rounded-3 h-100">
            <h4 className="mb-2">Nuestra visión</h4>
            <p className="mb-0 text-muted">
              Ser la tienda de referencia en Chile para Apple y Samsung, asegurando disponibilidad,
              buen precio y postventa de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="mb-4">
        <h4 className="mb-3">Nuestros valores</h4>
        <ul className="list-group">
          <li className="list-group-item">Transparencia en precios y políticas.</li>
          <li className="list-group-item">Soporte cercano y resolución rápida.</li>
          <li className="list-group-item">Selección curada de productos (sin ruido).</li>
          <li className="list-group-item">Respeto por tu tiempo: procesos simples.</li>
        </ul>
      </section>

      {/* Equipo (placeholder simple) */}
      <section className="mb-4">
        <h4 className="mb-3">Equipo</h4>
        <div className="row g-3">
          {[
            { nombre: 'Esteban Mora', rol: 'Coordinación & Frontend' },
            { nombre: 'Miguel Arredondo', rol: 'Catálogo & Operaciones' },
            { nombre: 'E. Mora - M. Arredondo', rol: 'Soporte & Postventa' },
          ].map((m, i) => (
            <div key={i} className="col-md-4">
              <div className="border rounded-3 p-3 h-100">
                <div className="fw-semibold">{m.nombre}</div>
                <div className="text-muted">{m.rol}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="border rounded-3 p-4 bg-light">
        <h4 className="mb-2">Contáctanos</h4>
        <p className="text-muted mb-3">
          ¿Tienes dudas? Escríbenos y te ayudamos a elegir el equipo ideal.
        </p>
        <div className="d-flex flex-column flex-md-row gap-2">
          <a className="btn btn-outline-primary" href="mailto:contacto@tiendamoar.cl">✉ contacto@tiendamoar.cl</a>
          <a className="btn btn-outline-secondary" href="https://wa.me/56912345678" target="_blank">💬 WhatsApp</a>
        </div>
      </section>
    </div>
  )
}
