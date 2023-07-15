import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { Toaster } from 'sonner'
import 'rsuite/dist/rsuite-no-reset.min.css'
import { ProductProvider } from './context/ProductContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <ProductProvider>
                <Toaster position="bottom-right" />
                <App />
            </ProductProvider>
        </AuthProvider>
    </React.StrictMode>
)
