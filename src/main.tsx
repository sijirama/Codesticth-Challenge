import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="" element={''}>
                <Route index={true} path="" element={<Dashboard />} />
            </Route>
        </>
    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
