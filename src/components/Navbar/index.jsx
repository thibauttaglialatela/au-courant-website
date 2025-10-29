import { useState } from 'react'
import { NavLink } from 'react-router'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import LogoIcon from '../../assets/logo.svg?react'

const StyledNavbar = styled.nav`
  min-height: 6vh;
  width: 100%;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  padding: 0 0.375rem;
  margin-bottom: auto;
  top: 0;
  left: 0;

  @media screen and (min-width: 426px) {
    padding: 0 1.25rem;
  }
`
const StyledLogo = styled(LogoIcon)`
  height: 40px;
  width: 40px;
  fill: ${colors.secondary};
`

const BurgerMenuWrapper = styled.button`
  height: 40px;
  width: 40px;
  color: ${colors.secondary};
  cursor: pointer;
  background: none;
  border: none;

  @media screen and (min-width: 426px) {
    display: none;
  }
`
const burgerMenu = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {' '}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16ZM18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H18ZM18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z"
        fill="currentColor"
      ></path>{' '}
    </g>
  </svg>
)

const closeMenu = (
  <svg
    viewBox="0 0 24 24"
    width="40"
    height="40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
    />
  </svg>
)

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.063rem;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 426px) {
    flex-direction: row;
    justify-content: end;
    height: inherit;
    gap: 3.125rem;
  }
`
const MenuWrapper = styled.div`
  background-color: ${colors.primary};
  position: fixed;
  top: 6vh;
  left: 0;
  width: 100%;
  z-index: 999;

  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};

  @media screen and (min-width: 426px) {
    position: static;
    display: flex;
    background-color: transparent;
    height: auto;
    width: auto;
  }
`
const StyledNavLink = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${colors.white};
  text-decoration: none;
  position: relative;
  transition: all 0.2s ease;

  &.active {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: ${colors.secondary};
  }

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: ${colors.secondary};
  }
`
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledNavbar>
      <StyledLogo />

      {/* Menu principal */}
      <MenuWrapper $isOpen={isOpen}>
        <NavMenu>
          <StyledNavLink to="/">Accueil</StyledNavLink>
          <StyledNavLink to="/works">Travaux</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </NavMenu>
      </MenuWrapper>

      {/* Bouton burger */}
      <BurgerMenuWrapper
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Burger menu"
      >
        {isOpen ? closeMenu : burgerMenu}
      </BurgerMenuWrapper>
    </StyledNavbar>
  )
}

export default Navbar
