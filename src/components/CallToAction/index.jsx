import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import PropTypes from 'prop-types'
import typography from '../../utils/style/typography.js'

const StyledCTA = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 11rem;
  width: 100%;
  background-color: ${colors.primary};
  margin-top: clamp(1.5rem, 4vw, 2rem);
  padding: clamp(1.5rem, 5vw, 4rem);
  gap: clamp(1rem, 4vw, 3rem);
`
const StyledCTAText = styled.p`
  text-align: center;
  font-weight: bold;
  color: ${colors.white};
`

const StyledCTALink = styled.a`
  width: 15rem;
  background-color: ${colors.secondary};
  text-decoration: none;
  color: ${colors.black};
  font-weight: bold;
  text-align: center;
  padding: 0.625rem 1.5rem;
  border-radius: 1.6rem 1.6rem 0 1.6rem;
  box-shadow: 0 4px 4px 0 ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.15);
  }

  @media screen and (min-width: 426px) {
    width: 18rem;
    font-size: ${typography.fontSizesDesktop.body};
  }
`
function CallToAction({ CTAText, linkHref }) {
  return (
    <StyledCTA>
      <StyledCTAText>{CTAText}</StyledCTAText>
      <StyledCTALink href={linkHref}>Contactez nous</StyledCTALink>
    </StyledCTA>
  )
}

CallToAction.propTypes = {
  CTAText: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
}

export default CallToAction
