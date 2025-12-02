import PropTypes from 'prop-types'
import styled from 'styled-components'
import error404Picture from '../../assets/logo_404_au-courant.svg'
import Button from '../Button'

const Wrapper = styled.section`
  padding: 2rem;
  text-align: center;
  max-width: 50rem;
  margin: 0 auto;
`

const Styled404Picture = styled.img`
  height: 30vh;

  @media screen and (min-width: 426px) {
    height: 50vh;
  }
`

const Page404 = ({ errorMessage, statusError, buttonLabel, buttonLink }) => {
  return (
    <Wrapper>
      <Styled404Picture
        src={error404Picture}
        alt="dame montrant un écran ne fonctionnant pas"
      />
      <h1>Erreur {statusError}</h1>
      <p>Mauvaise nouvelle : {errorMessage}</p>
      <Button to={buttonLink} $variant="generic" $size="small">
        {buttonLabel}
      </Button>
    </Wrapper>
  )
}

Page404.propTypes = {
  errorMessage: PropTypes.string,
  statusError: PropTypes.number,
  buttonLabel: PropTypes.string,
  buttonLink: PropTypes.string,
}

Page404.defaultProps = {
  errorMessage: '',
  statusError: '',
  buttonLabel: 'Retour',
  buttonLink: '/',
}

export default Page404
