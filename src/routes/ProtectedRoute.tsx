import { Navigate, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAdmin } = useAuth()
  const location = useLocation()
  if (!isAdmin) return <Navigate to={`/login?from=${location.pathname}`} replace />
  return children
}
