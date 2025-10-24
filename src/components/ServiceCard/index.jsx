import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import PropTypes from 'prop-types'
import Button from '../Button/index.jsx'

const StyledCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: clamp(18rem, 30%, 25rem);
  height: 23.25rem;
`
const CardPicture = styled.img`
  width: 100%;
  height: 12.5rem;
`
const CardTitle = styled.h4`
  text-align: center;
  color: ${colors.black};
  text-transform: uppercase;
`
const CardBody = styled.p`
  text-align: center;
  color: ${colors.black};
  margin: 0;
`
function ServiceCard({ title, price, imageUrl, imageAlt }) {
  return (
    <StyledCardWrapper>
      <CardPicture src={imageUrl} alt={imageAlt} />
      <CardTitle>{title}</CardTitle>
      <CardBody>Tarif : {price} € HT</CardBody>
      <Button href="#">En savoir plus</Button>
    </StyledCardWrapper>
  )
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ServiceCard
