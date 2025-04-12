import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<App />} />
          <Route path="/contact" element={<App />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>,
)
