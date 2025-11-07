import { Link } from 'react-router-dom'

// Ejemplo de posts (puedes luego traerlos de una API con useEffect)
const posts = [
  {
    id: 1,
    title: 'Cómo elegir tu smartphone en 2025',
    excerpt:
      'Guía rápida para entender procesadores, cámaras y baterías sin marearte con specs…',
    date: '2025-11-01',
    tag: 'Guías',
  },
  {
    id: 2,
    title: 'Apple vs Samsung: ¿Cuál te conviene?',
    excerpt:
      'Comparamos ecosistema, precios, soporte, cámaras y rendimiento para ayudarte a decidir.',
    date: '2025-10-21',
    tag: 'Comparativas',
  },
  {
    id: 3,
    title: '5 tips para alargar la vida de tu batería',
    excerpt:
      'Carga inteligente, brillantes mínimos y otras prácticas que realmente funcionan.',
    date: '2025-09-15',
    tag: 'Tips',
  },
]

export default function Blog() {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="mb-1">Blog</h1>
        <p className="text-muted">Novedades, comparativas y guías rápidas.</p>
      </header>

      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4">
            <article className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="badge bg-primary">{post.tag}</span>
                  <small className="text-muted">{new Date(post.date).toLocaleDateString('es-CL')}</small>
                </div>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted">{post.excerpt}</p>

                <div className="mt-auto d-grid">
                  {/* Si más adelante quieres detalle: /blog/:id */}
                  <Link to="#" className="btn btn-outline-secondary disabled" aria-disabled="true">
                    Leer más (pronto)
                  </Link>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="alert alert-light border d-flex align-items-center justify-content-between mt-2">
        <div>
          <strong>¿Quieres recibir las novedades?</strong>
          <div className="text-muted">Suscríbete y te avisamos de ofertas y nuevos artículos.</div>
        </div>
        <button className="btn btn-primary">Suscribirme</button>
      </div>
    </div>
  )
}
