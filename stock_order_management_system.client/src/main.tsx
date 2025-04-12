import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import App from './App.tsx'
import StockOrder from './StockOrder.tsx';
import Header from './Component/Header.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/stock/:id" element={<StockOrder/>} />
          <Route path="/contact" element={<App />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>,
)
