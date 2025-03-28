import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import { AuthProvider } from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'




createRoot(document.getElementById('root')).render(
  <StrictMode>
<HelmetProvider>
  
<AuthProvider>
  <RouterProvider router={routes}></RouterProvider>
   <Toaster></Toaster>
  </AuthProvider>
  
</HelmetProvider>
 
  </StrictMode>
) ;
