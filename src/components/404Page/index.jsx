import PropTypes from 'prop-types'
import styled from 'styled-components'
import error404Picture from '../../assets/logo_404_au-courant.svg?'
import Button from '../Button'

const Wrapper = styled.section`
  padding: 2rem;
  text-align: center;
`

const Styled404Picture = styled.img`
  height: 30vh;

  @media screen and (min-width: 426px) {
    height: 50vh;
  }
`

const Page404 = ({ errorMessage, statusError }) => {
  return (
    <Wrapper>
      <Styled404Picture
        src={error404Picture}
        alt="dame montrant un écran ne fonctionnant pas"
      />
      <h1>Erreur {statusError}</h1>
      <p>Mauvaise nouvelle : {errorMessage}</p>
      <Button to="/works" $variant="generic" $size="small">
        Retour à la liste des travaux
      </Button>
    </Wrapper>
  )
}

Page404.propTypes = {
  errorMessage: PropTypes.string,
  statusError: PropTypes.string,
}

export default Page404
