import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Cart from './components/cartButton'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Cart />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
