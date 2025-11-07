// src/components/molecules/SearchBar.tsx
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SearchBar({ placeholder = 'Buscar modelo o marca...' }: { placeholder?: string }) {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useMemo(() => new URLSearchParams(location.search), [location.search])
  const qFromUrl = params.get('q') ?? ''

  const [text, setText] = useState(qFromUrl)

  // Mantener el input sincronizado si cambian la URL desde fuera
  useEffect(() => {
    setText(qFromUrl)
  }, [qFromUrl])

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    const q = text.trim()
    // Enter siempre busca, incluso con 1 carácter
    navigate(`/productos${q ? `?q=${encodeURIComponent(q)}` : ''}`)
  }, [navigate, text])

  // Debounce: autofiltra a partir de 2+ caracteres
  useEffect(() => {
    const q = text.trim()
    const t = setTimeout(() => {
      if (q.length >= 2) {
        // si estás en otra ruta, te lleva a /productos y filtra
        navigate(`/productos?q=${encodeURIComponent(q)}`, { replace: true })
      } else if (q.length === 0 && location.pathname === '/productos') {
        // limpiar filtro si estás en catálogo
        navigate('/productos', { replace: true })
      }
    }, 300)
    return () => clearTimeout(t)
  }, [text, navigate, location.pathname])

  return (
    <form className="d-flex" role="search" onSubmit={onSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder={placeholder}
        value={text}
        onChange={onChange}
      />
      <button className="btn btn-outline-primary" type="submit">Buscar</button>
    </form>
  )
}

