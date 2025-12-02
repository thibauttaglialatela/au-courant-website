import styled from 'styled-components'
import Header from '../../components/Header'
import typography from '../../utils/style/typography'

const ContactWrapper = styled.section`
  margin: 2.5rem 0.75rem 2.5rem 0.75rem;

  @media screen and (min-width: 426px) {
    margin: 3rem 3.75rem 4rem 3.75rem;
  }
`
const AddressWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledAddress = styled.address`
  font-size: ${typography.fontSizes.body};
  text-align: center;
  line-heignt: 1.6;

  @media screen and (min-width: 426px) {
    font-size: ${typography.fontSizesDesktop.body};
  }
`

const AddressSectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 426px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`
const MapImage = styled.img`
  width: 100%;
  margin-bottom: 1rem;

  @media screen and (min-width: 426px) {
    width: 32rem;
  }
`

function ContactPage() {
  return (
    <>
      <Header title="Formulaire de contact" />
      <ContactWrapper>
        <AddressWrapper>
          <AddressSectionTitle>Où nous trouver ?</AddressSectionTitle>
          <MapImage
            src="https://www.placeholderimage.eu/api/city/id/4/260/260"
            alt="carte"
          />
          <StyledAddress>
            2 rue Chevreul
            <br />
            75012 Paris
            <br />
            01 48 99 36 22
            <br />
            <a href="mailto:contact@aucourant.fr">contact@aucourant.fr</a>
          </StyledAddress>
        </AddressWrapper>
      </ContactWrapper>
    </>
  )
}

export default ContactPage
