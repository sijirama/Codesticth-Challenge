import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { Toaster } from 'sonner'
import 'rsuite/dist/rsuite-no-reset.min.css'
import { ProductProvider } from './context/ProductContext.tsx'
import { SearchProvider } from './context/SearchCOntext.tsx'
import { MultiProvider } from './context/MultiStepFormContext.tsx'

//<React.StrictMode>
ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <SearchProvider>
            <ProductProvider>
                <MultiProvider>
                    <Toaster position="bottom-right" />
                    <App />
                </MultiProvider>
            </ProductProvider>
        </SearchProvider>
    </AuthProvider>
)
