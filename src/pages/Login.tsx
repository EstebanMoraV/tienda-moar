import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = new URLSearchParams(location.search).get('from') || '/admin'

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const ok = await login(user, pass)
    ok ? navigate(from) : setError('Credenciales incorrectas')
  }

  return (
    <div className="container py-5" style={{ maxWidth: 420 }}>
      <h2 className="mb-3">Login Administrador</h2>
      <form className="d-grid gap-3" onSubmit={onSubmit}>
        <input className="form-control" placeholder="Usuario (admin@tienda.com)" value={user} onChange={e => setUser(e.target.value)} />
        <input className="form-control" type="password" placeholder="Contraseña (admin123)" value={pass} onChange={e => setPass(e.target.value)} />
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <button className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  )
}
