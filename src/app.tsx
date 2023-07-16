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

        const fetchData = async () => {
            try {
                fetchCart()
                // Other actions to be performed after fetching the cart
            } catch (error) {
                // Handle any errors
            }
        }

        //addData()
        fetchData()

        // Add event listener for unload
        window.addEventListener('unload', fetchData)

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('unload', fetchData)
        }
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
