import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Cart from './components/cartButton'
import Signup from './pages/signup'
import SignIn from './pages/signin'
import CartModal from './components/CartModal'
import ProductModal from './components/ProductModal'
// import { useEffect } from 'react'
// import { ProductSampleData } from './data/Products'
// import { addSampleData } from './utils/firebaseFunctions'

export default function App() {
    // useEffect(() => {
    //     const addData = async () => {
    //         await addSampleData(ProductSampleData)
    //     }
    //     addData()
    // }, [])

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
