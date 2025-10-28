import Button from '../Button'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../utils/style/colors'

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: clamp(24rem, 33%, 26rem);
  aspect-ratio: 2/3;
  border: solid 1px ${colors.primary};
  border-radius: 8px;

  @media screen and (min-width: 426px) {
    aspect-ratio: 3/4;
    width: calc((100% - 5rem) / 3);
  }
`
const StyledCardPicture = styled.img`
  width: 100%;
  height: 75%;
  border-radius: 12px;

  @media screen and (min-width: 426px) {
    height: 88%;
  }
`

const StyledCardTitle = styled.h4`
  text-align: center;
`

const StyledCardDate = styled.p`
  text-align: center;
`
function ProjectCard({ url, alt, client, endDate }) {
  const date = new Date(endDate)
  const formattedDate = date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  return (
    <StyledCard>
      <StyledCardPicture src={url} alt={alt} />
      <StyledCardTitle>{client}</StyledCardTitle>
      <StyledCardDate>date de fin: le {formattedDate}</StyledCardDate>
      <Button href="#">En savoir plus</Button>
    </StyledCard>
  )
}

ProjectCard.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  client: PropTypes.string,
  endDate: PropTypes.string,
}

export default ProjectCard
