import { NextPage } from 'next'
import { useState, createContext, ReactNode } from 'react'

export interface CartData {
  id: string
  name: string
  price: number
  sellingPrice: number
  image: string
}

export interface CartProviderProps {
  children: ReactNode
  cartData: CartData[]
}

export interface CartContextData {
  cartData: CartData[]
  setCartData: (data: CartData[]) => void
}

export const CartContext = createContext({} as CartContextData)

export const CartProvider: NextPage<CartProviderProps> = function ({ children, cartData }) {
  const [cartDataState, setCartDataState] = useState<CartData[]>(cartData)

  const setCartData = (newCartData: CartData[]): void => {
    setCartDataState(newCartData)
  }

  /* 
  Funções para remover e adcionar items no cart alterar o contexto local
  e atualizar a mudança na API ( Para poder acessar o carrinho com por toda aplicação )
  */

  return (
    <CartContext.Provider value={{ cartData: cartDataState, setCartData: setCartData }}>
      {children}
    </CartContext.Provider>
  )
}
