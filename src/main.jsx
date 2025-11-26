import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home/index.jsx'
import Works from './pages/Works/index.jsx'
import GlobalStyle from './globalStyles.js'
import Layout from './components/Layout/index.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage/index.jsx'
import WorkDetailPage from './pages/WorkDetailPage/index.jsx'

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
        {/* <Route path="/works" element={<Works />} /> */}
        <Route path="/works">
          <Route index element={<Works />} />
          <Route path=":id" element={<WorkDetailPage />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>,
)
