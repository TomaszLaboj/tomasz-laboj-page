import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Music from './Music/Music.tsx'
import Programming from './Programming/Programming.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/music" element={<Music />} />
          <Route path="/programming" element={<Programming />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
