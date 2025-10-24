import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../utils/style/colors'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
`
const HeaderImage = styled.img`
  width: 100%;
  height: auto;
  padding-top: 6vh;

  @media screen and (min-width: 426px) {
    aspect-ratio: 16/5;
    object-fit: cover;
    object-position: 50% 10%;
  }
`

const StyledHeaderTitle = styled.h1`
  text-align: center;
  color: ${colors.primary};
  margin-top: 2.5rem;

  @media screen and (min-width: 426px) {
    margin-top: 4rem;
  }
`
const Header = ({ title, imageSrc, imageAlt }) => {
  return (
    <StyledHeader>
      {imageSrc && (
        <HeaderImage src={imageSrc} alt={imageAlt || ''} loading="lazy" />
      )}

      <StyledHeaderTitle>{title}</StyledHeaderTitle>
    </StyledHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Header
