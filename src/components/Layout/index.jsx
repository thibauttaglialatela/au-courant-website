import styled from 'styled-components'
import Navbar from '../Navbar/index.jsx'
import Footer from '../Footer/index.jsx'
import PropTypes from 'prop-types'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
`

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </PageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
