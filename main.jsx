import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Laptops from './Laptop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Laptops/>
  </StrictMode>,
)
