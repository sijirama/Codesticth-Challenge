import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Cart from './components/cartButton'
import Signup from './pages/signup'
import SignIn from './pages/signin'
import CartModal from './components/CartModal'
import ProductModal from './components/ProductModal'
import { useEffect } from 'react'
import { ProductSampleData } from './data/Products'
import { addSampleData } from './utils/firebaseFunctions'
import useProduct from './context/ProductContext'

export default function App() {
    const { fetchCart } = useProduct()

    useEffect(() => {
        const addData = async () => {
            await addSampleData(ProductSampleData)
        }
        const addToCart = async () => {
            try {
                fetchCart()
            } catch (error) {}
        }

        //addData()
        addToCart()
    }, [])

    return (
        <>
            <BrowserRouter>
                <Cart />
                <ProductModal />
                <CartModal />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
