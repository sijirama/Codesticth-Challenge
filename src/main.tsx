import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <Toaster position="bottom-right" />
            <App />
        </AuthProvider>
    </React.StrictMode>
)
