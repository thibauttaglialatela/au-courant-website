import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import GlobalStyle from './globalStyles.js'
import Layout from './components/Layout/index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyle />
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
)
