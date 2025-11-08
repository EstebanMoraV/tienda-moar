import { useRoutes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Productos from '../pages/Productos'
import Carrito from '../pages/Carrito'
import Nosotros from '../pages/Nosotros'

export function AppRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/productos', element: <Productos /> },
        { path: '/carrito', element: <Carrito /> },
        { path: '/nosotros', element: <Nosotros /> },
      ],
    },
  ])
}
