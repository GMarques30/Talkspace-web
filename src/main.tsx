import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet titleTemplate="%s | Talkspace" />
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
)
