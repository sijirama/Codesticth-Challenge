import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { Toaster } from 'sonner'
import 'rsuite/dist/rsuite-no-reset.min.css'
import { ProductProvider } from './context/ProductContext.tsx'
import { SearchProvider } from './context/SearchCOntext.tsx'
import { MultiProvider } from './context/MultiStepFormContext.tsx'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider, DarkTheme } from 'baseui'
import { ConfigProvider } from 'antd'

const engine = new Styletron()

//<React.StrictMode>
ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <SearchProvider>
            <ProductProvider>
                <MultiProvider>
                    <StyletronProvider value={engine}>
                        <BaseProvider theme={DarkTheme}>
                            <Toaster position="bottom-right" />
                            <ConfigProvider theme={{ token: { colorPrimary: '#292929' } }}>
                                <App />
                            </ConfigProvider>
                        </BaseProvider>
                    </StyletronProvider>
                </MultiProvider>
            </ProductProvider>
        </SearchProvider>
    </AuthProvider>
)
