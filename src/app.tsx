import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Cart from './components/cartButton'
import Signup from './pages/signup'
import SignIn from './pages/signin'
import CartModal from './components/CartModal'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Cart />
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
