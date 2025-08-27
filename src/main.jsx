import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyPortfolio from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyPortfolio />
  </StrictMode>,
)
