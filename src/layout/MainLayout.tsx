// src/layout/MainLayout.tsx
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import ToastManager from '../components/molecules/ToastManager'

export default function MainLayout() {
  const [toasts, setToasts] = useState<{ id: number; text: string }[]>([])

  const showToast = (text: string) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, text }])
  }

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 container py-4">
        <Outlet context={{ showToast }} />
      </main>
      <Footer />
      <ToastManager toasts={toasts} remove={removeToast} />
    </div>
  )
}




