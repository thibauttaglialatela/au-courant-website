import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home/index.jsx'
import Works from './pages/Works/index.jsx'
import GlobalStyle from './globalStyles.js'
import Layout from './components/Layout/index.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage/index.jsx'
import WorkDetailPage from './pages/WorkDetailPage/index.jsx'
import ContactPage from './pages/ContactPage/index.jsx'
import 'leaflet/dist/leaflet.css'
import LoginPage from './pages/LoginPage/index.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/prestation/:prestationId"
          element={<ServiceDetailPage />}
        />
        <Route path="/works">
          <Route index element={<Works />} />
          <Route path=":id" element={<WorkDetailPage />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/admin">
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
