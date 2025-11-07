import { useState } from 'react'

export default function SearchBar() {
  // Estado local para guardar el texto de búsqueda
  const [query, setQuery] = useState('')

  // Función que se ejecuta al cambiar el input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Buscando:', query)
    // Aquí podrías llamar a una función de búsqueda o navegar
  }

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Buscar productos..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">
        Buscar
      </button>
    </form>
  )
}
