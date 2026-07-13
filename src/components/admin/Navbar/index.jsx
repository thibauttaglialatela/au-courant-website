import styled from 'styled-components'
import colors from '../../../utils/style/colors'
import { NavLink } from 'react-router'

const StyledVerticalNavbar = styled.nav`
  height: 100%;
  background-color: #422400;
  display: flex;
  flex-direction: column;
`

const StyledNavLink = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${colors.white};
  text-decoration: none;
  position: relative;
  transition: all 0.2s ease;

  &.hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: ${colors.secondary};
  }
`
const NavAdminMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`
function Navbar() {
  return (
    <StyledVerticalNavbar>
      <NavAdminMenu>
        <StyledNavLink to="/admin">Prestations</StyledNavLink>
        <StyledNavLink to="#">Articles</StyledNavLink>
        <StyledNavLink to="/admin/certifications">Certifications</StyledNavLink>
        <StyledNavLink to="#">Services</StyledNavLink>
        <StyledNavLink to="#">Se déconnecter</StyledNavLink>
      </NavAdminMenu>
    </StyledVerticalNavbar>
  )
}

export default Navbar
