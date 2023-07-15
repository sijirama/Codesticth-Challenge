import { ReactNode } from 'react'
import { useState, useEffect, createContext, useContext } from 'react'
import { getUserCart } from '../utils/firebaseFunctions'
import { Product } from '../Types/Product'
import useUserAuth from './AuthContext'
import { getAProduct } from '../utils/firebaseFunctions'

interface Props {
    children: ReactNode
}

export interface ProductContextModel {
    cartLength: number | null
    cart: Product[] | null
    showModal: () => void
    hideModal: () => void
    toggleModal: () => void
    isModalOpen: boolean
    //productId: string
    selectedProduct: Product | null
    getProduct: (id: string) => Promise<void>
}

export const ProductContext = createContext({} as ProductContextModel)

export const ProductProvider = ({ children }: Props) => {
    const [cartLength, setCartLength] = useState<number | null>(null)
    const [cart, setCart] = useState<Product[] | null>(null)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { user } = useUserAuth()

    const showModal = () => {
        setIsModalOpen(true)
    }
    const hideModal = () => {
        setIsModalOpen(false)
    }
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev)
    }

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

    const getProduct = async (id: string) => {
        try {
            const product = await getAProduct(id)
            setSelectedProduct(product)
            setIsModalOpen(true)
        } catch (error) {}
    }

    const value: ProductContextModel = {
        cartLength,
        cart,
        showModal,
        hideModal,
        toggleModal,
        isModalOpen,
        getProduct,
        selectedProduct
    }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export default function useProduct(): ProductContextModel {
    return useContext(ProductContext)
}
