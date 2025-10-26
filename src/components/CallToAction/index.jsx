import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import PropTypes from 'prop-types'

const StyledCTA = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 11rem;
  width: 100%;
  background-color: ${colors.primary};
  margin-top: 1.5rem;
  padding: 0 4rem;
`
const StyledCTAText = styled.p`
  text-align: center;
  font-weight: bold;
  color: ${colors.white};
`

const StyledCTALink = styled.a`
  height: 4.25rem;
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
`
function CallToAction({ CTAText, linkHref }) {
  return (
    <StyledCTA>
      <StyledCTAText>{CTAText}</StyledCTAText>
      <StyledCTALink href={linkHref}>En savoir plus</StyledCTALink>
    </StyledCTA>
  )
}

CallToAction.propTypes = {
  CTAText: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
}

export default CallToAction
