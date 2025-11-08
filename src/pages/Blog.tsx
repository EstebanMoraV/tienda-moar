import { Link } from 'react-router-dom'
import heroImg from '../assets/images/blogs/hero-blog.jpg'

// Ejemplo de posts (luego puedes traerlos desde una API con useEffect)
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
      'Carga inteligente, brillo mínimo y otras prácticas que realmente funcionan.',
    date: '2025-09-15',
    tag: 'Tips',
  },
]

export default function Blog() {
  return (
    <div className="container py-4">

      {/* HERO con imagen*/}
      <div className="position-relative mb-4">
        <img
          src={heroImg}
          alt="Smartphones Apple y Samsung"
          className="w-100 rounded"
          style={{ height: 320, objectFit: 'cover' }}
        />

        {/* Overlay + texto */}
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end">
          <div className="w-100 p-3 p-md-4 bg-dark bg-opacity-50 rounded-bottom">
            <h1 className="text-white m-0">Blog</h1>
            <p className="text-white-50 m-0">Novedades, comparativas y guías rápidas.</p>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4">
            <article className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="badge bg-primary">{post.tag}</span>
                  <small className="text-muted">
                    {new Date(post.date).toLocaleDateString('es-CL')}
                  </small>
                </div>

                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted">{post.excerpt}</p>

                <div className="mt-auto d-grid">
                  <Link
                    to="#"
                    className="btn btn-outline-secondary disabled"
                    aria-disabled="true"
                  >
                    Leer más (pronto)
                  </Link>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
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
