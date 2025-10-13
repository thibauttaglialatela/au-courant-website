import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import GlobalStyle from './globalStyles.js'
import Navbar from './components/Navbar/index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
)
