import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'


import { HeroresApp } from './HeroresApp.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroresApp />
    </BrowserRouter>
  </StrictMode>,
)
