import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home/index.jsx'
import Works from './pages/Works/index.jsx'
import GlobalStyle from './globalStyles.js'
import Layout from './components/Layout/index.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage/index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyle />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/prestation/:prestationId"
          element={<ServiceDetailPage />}
        />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
)
