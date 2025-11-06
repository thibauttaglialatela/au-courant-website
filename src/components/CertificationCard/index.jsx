import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import typography from '../../utils/style/typography'

const StyledCertificationCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media screen and (min-width: 426px) {
    width: fit-content;
  }
`
const StyledCertificationPicture = styled.img`
  height: 15rem;
  object-fit: fill;
`

const StyledCertificationName = styled.p`
  text-align: center;
  font-weight: bold;
  color: ${colors.black};
  font-size: ${typography.fontSizes};
`

const CertificationCard = ({ certificationName, pictureUrl, pictureAlt }) => {
  return (
    <StyledCertificationCard>
      <StyledCertificationPicture src={pictureUrl} alt={pictureAlt} />
      <StyledCertificationName>{certificationName}</StyledCertificationName>
    </StyledCertificationCard>
  )
}

CertificationCard.propTypes = {
  certificationName: PropTypes.string,
  pictureUrl: PropTypes.string.isRequired,
  pictureAlt: PropTypes.string.isRequired,
}

export default CertificationCard
