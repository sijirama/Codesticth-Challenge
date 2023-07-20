import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Cart from './components/cartButton'
import Signup from './pages/signup'
import SignIn from './pages/signin'
import CartModal from './components/CartModal'
import ProductModal from './components/ProductModal'
import { useEffect } from 'react'
// import { ProductSampleData } from './data/Products'
// import { addSampleData } from './utils/firebaseFunctions'
import SearchModal from './components/SearchModal'
import Catalog from './pages/Catalog'
import MultiStepForm from './pages/MultiForm'

export default function App() {
    useEffect(() => {
        // const addData = async () => {
        //     await addSampleData(ProductSampleData)
        // }
        //
        //Load sampledata from data/products
        //addData()
    }, [])

    return (
        <>
            <BrowserRouter>
                <Cart />
                <SearchModal />
                <ProductModal />
                <CartModal />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/checkout" element={<MultiStepForm />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
