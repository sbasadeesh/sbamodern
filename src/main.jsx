import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './navbar.jsx'
import Footer from './footer/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Navbar />
    <App />
    <Footer />
    </>
  </StrictMode>,
)
