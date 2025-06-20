import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
<h1 className="text-center text-2xl font-bold pt-4">Supabase Authentication System</h1>
<RouterProvider router={router}/>
    </AuthContextProvider>
  </StrictMode>,
)
