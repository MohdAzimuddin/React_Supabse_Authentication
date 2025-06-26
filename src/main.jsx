import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { Power } from 'lucide-react'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
            <div className="py-8 flex items-center justify-center gap-1">
              <span className="text-green-600">
                <Power/>
              </span>
              <span className="text-green-400 text-sm font-medium">
                Powered by Supabase
              </span>
          </div>
          <Toaster position='top-center' reverseOrder={false}/>
<RouterProvider router={router}/>
    </AuthContextProvider>
  </StrictMode>,
)
