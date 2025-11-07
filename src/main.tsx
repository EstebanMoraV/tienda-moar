import React from 'react'
// ReactDOM es necesario para renderizar la aplicación en el DOM
import ReactDOM from 'react-dom/client'
// Importar estilos globales de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Importar el componente principal de la aplicación
import App from './App'
// react-router-dom import necesario sirve para la navegación
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // esto activa el carrusel


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Queda el BrowserRouter envolviendo la Aplicación para habilitar la navegación */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
