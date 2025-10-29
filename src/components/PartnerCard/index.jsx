import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../utils/style/colors.js'
import typography from '../../utils/style/typography.js'

const StyledPartnerCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  min-height: 16rem;
  width: 100%;

  @media screen and (min-width: 426px) {
    min-height: fit-content;
    width: 14rem;
  }
`
const ImageCard = styled.img`
  width: 100%;
  aspect-ratio: 1;
`
const LinkCard = styled.a`
  color: ${colors.black};
  font-size: ${typography.fontSizes.body};
`
function PartnerCard({ url, alt, linkWebsite, partnerName }) {
  return (
    <StyledPartnerCard>
      <ImageCard src={url} alt={alt} />
      <LinkCard href={linkWebsite}>{partnerName}</LinkCard>
    </StyledPartnerCard>
  )
}

PartnerCard.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  linkWebsite: PropTypes.string,
  partnerName: PropTypes.string,
}
export default PartnerCard
