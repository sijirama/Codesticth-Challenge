import { ReactNode } from 'react'
import { useState, useEffect, createContext, useContext } from 'react'
import { getUserCart } from '../utils/firebaseFunctions'
import { Product } from '../Types/Product'
import useUserAuth from './AuthContext'

interface Props {
    children: ReactNode
}

export interface ProductContextModel {
    cartLength: number | null
    cart: Product[] | null
}

export const ProductContext = createContext({} as ProductContextModel)

export const ProductProvider = ({ children }: Props) => {
    const [cartLength, setCartLength] = useState<number | null>(null)
    const [cart, setCart] = useState<Product[] | null>(null)
    const { user } = useUserAuth()

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const cart = await getUserCart(user?.uid!)
                setCart(cart.items!)
                setCartLength(cart.length)
            } catch (error) {
                setCart(null)
                setCartLength(0)
            }
        }
        fetchCart()
        //console.log(cartLength)
        //console.log(cart)
    }, [])

    const value: ProductContextModel = {
        cartLength,
        cart
    }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export default function useProduct(): ProductContextModel {
    return useContext(ProductContext)
}
