import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, ReactNode } from 'react'
import type { Product } from '../assets/products'

type CartLine = {
  product: Product
  qty: number
}

type CartState = {
  // por simplicidad usamos id numérico como clave
  items: Record<number, CartLine>
}

type CartAction =
  | { type: 'add'; product: Product }
  | { type: 'removeOne'; id: number }
  | { type: 'removeLine'; id: number }
  | { type: 'setQty'; id: number; qty: number }
  | { type: 'clear' }

const initialState: CartState = { items: {} }

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add': {
      const id = action.product.id
      const current = state.items[id]?.qty || 0
      return {
        ...state,
        items: {
          ...state.items,
          [id]: { product: action.product, qty: current + 1 }
        }
      }
    }
    case 'removeOne': {
      const copy = { ...state.items }
      const line = copy[action.id]
      if (!line) return state
      if (line.qty <= 1) {
        delete copy[action.id]
      } else {
        copy[action.id] = { ...line, qty: line.qty - 1 }
      }
      return { ...state, items: copy }
    }
    case 'removeLine': {
      const copy = { ...state.items }
      delete copy[action.id]
      return { ...state, items: copy }
    }
    case 'setQty': {
      const copy = { ...state.items }
      if (action.qty <= 0) {
        delete copy[action.id]
      } else if (copy[action.id]) {
        copy[action.id] = { ...copy[action.id], qty: action.qty }
      }
      return { ...state, items: copy }
    }
    case 'clear':
      return { items: {} }
    default:
      return state
  }
}

type CartContextValue = {
  state: CartState
  add: (product: Product) => void
  removeOne: (id: number) => void
  removeLine: (id: number) => void
  setQty: (id: number, qty: number) => void
  clear: () => void
  totalItems: number
  subtotal: number // suma de precioNum * qty
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'tienda-moar-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    // hidratar desde localStorage
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as CartState) : initialState
    } catch {
      return initialState
    }
  })

  // persistir
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch { /* noop */ }
  }, [state])

  const add = useCallback((product: Product) => dispatch({ type: 'add', product }), [])
  const removeOne = useCallback((id: number) => dispatch({ type: 'removeOne', id }), [])
  const removeLine = useCallback((id: number) => dispatch({ type: 'removeLine', id }), [])
  const setQty = useCallback((id: number, qty: number) => dispatch({ type: 'setQty', id, qty }), [])
  const clear = useCallback(() => dispatch({ type: 'clear' }), [])

  const totalItems = useMemo(
    () => Object.values(state.items).reduce((acc, l) => acc + l.qty, 0),
    [state.items]
  )

  const subtotal = useMemo(
    () => Object.values(state.items).reduce((acc, l) => acc + (l.product.precioNum ?? 0) * l.qty, 0),
    [state.items]
  )

  const value: CartContextValue = useMemo(
    () => ({ state, add, removeOne, removeLine, setQty, clear, totalItems, subtotal }),
    [state, add, removeOne, removeLine, setQty, clear, totalItems, subtotal]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
