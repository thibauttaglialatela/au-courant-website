import styled from 'styled-components'
import colors from '../../utils/style/colors'
import typography from '../../utils/style/typography'
import XIcon from '../../assets/x.svg?react'
import FacebookIcon from '../../assets/facebook.svg?react'
import InstagramIcon from '../../assets/instagram.svg?react'
import LinkedinIcon from '../../assets/linkedin.svg?react'
import AddressIcon from '../../assets/address.svg?react'
import telephoneIcon from '../../assets/telephone.svg?react'
import mobileIcon from '../../assets/mobile.svg?react'
import emailIcon from '../../assets/email.svg?react'

const StyledFooter = styled.footer`
  background-color: ${colors.primary};
  width: 100%;
  padding: 2.5rem 1.5rem;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media screen and (min-width: 426px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
  }
`
const StyledAdressSection = styled.section`
  padding: 0.25rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media screen and (min-width: 426px) {
    padding: 1rem 0;
    min-height: auto;
    width: 40%;
    justify-content: space-around;
  }
`
const StyledTitleFooterSection = styled.h3`
  color: ${colors.white};
  text-align: center;
`
const StyledParagraphFooter = styled.address`
  color: ${colors.white};
  font-family: ${typography.fontFamilies.body};
  font-size: ${typography.fontSizes.body};
  text-align: left;
  max-width: 12ch;
  margin: 0;
  font-style: normal;

  @media screen and (min-width: 426px) {
    font-size: ${typography.fontSizesDesktop.body};
  }
`

const StyledPhoneNumber = styled.p`
  color: ${colors.white};
  font-weight: bold;
  max-width: 10rem;
  text-align: center;
  margin: 0;

  @media screen and (min-width: 426px) {
    text-align: left;
  }
`

const StyledAddress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;

  @media screen and (min-width: 426px) {
    gap: 10px;
    justify-content: space-between;
  }
`

const StyledTelephoneIcon = styled(telephoneIcon)`
  height: 1.25rem;
  width: 1.25rem;
`

const StyledMobileIcon = styled(mobileIcon)`
  height: 1.25rem;
  width: 1.25rem;
  fill: ${colors.secondary};
`

const StyledAddressIcon = styled(AddressIcon)`
  height: 1.25rem;
  width: 1.25rem;
  fill: ${colors.secondary};
`

const StyledEmailIcon = styled(emailIcon)`
  height: 1.25rem;
  width: 1.25rem;
  fill: ${colors.secondary};
`

const StyledLinkFooter = styled.a`
  color: ${colors.white};
  font-family: ${typography.fontFamilies.body};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const SocialIcon = styled.svg`
  height: 2.8rem;
  width: 2.8rem;
  fill: ${colors.secondary};
  transition: fill 0.2s ease;
  &:hover {
    fill: ${colors.white};
  }
`

const StyledSocialMedias = styled.section`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: clamp(1rem, 3vw, 3rem);
`
const Footer = () => {
  return (
    <StyledFooter>
      <StyledAdressSection aria-labelledby="footer-contact-title">
        <StyledTitleFooterSection id="footer-contact-title">
          Contact
        </StyledTitleFooterSection>

        <StyledAddress>
          <StyledAddressIcon aria-hidden="true" />
          <StyledParagraphFooter>
            2 rue Chevreul 75012 Paris
          </StyledParagraphFooter>
        </StyledAddress>

        <StyledAddress aria-label="Téléphone fixe">
          <StyledTelephoneIcon aria-hidden="true" />
          <StyledPhoneNumber>01 48 99 36 22</StyledPhoneNumber>
        </StyledAddress>

        <StyledAddress aria-label="Téléphone mobile">
          <StyledMobileIcon aria-hidden="true" />
          <StyledPhoneNumber>07 33 33 33 33</StyledPhoneNumber>
        </StyledAddress>

        <StyledAddress aria-label="adresse mail">
          <StyledEmailIcon aria-hidden="true" />
          <StyledLinkFooter href="mailto">
            contact@aucourant.fr
          </StyledLinkFooter>
        </StyledAddress>
      </StyledAdressSection>

      <StyledAdressSection>
        <StyledTitleFooterSection>Au courant</StyledTitleFooterSection>
        <StyledLinkFooter href="#">
          Conditions générales de ventes
        </StyledLinkFooter>
        <StyledLinkFooter href="#">
          Politique de confidentialité
        </StyledLinkFooter>
        <StyledLinkFooter href="#">Nous contacter</StyledLinkFooter>
        <StyledLinkFooter href="#">Mentions légales</StyledLinkFooter>
        <StyledSocialMedias aria-label="Nos réseaux sociaux">
          <a
            href="https://twitter.com/ton_compte"
            aria-label="Visiter notre profil X (anciennement Twitter)"
          >
            <SocialIcon as={XIcon} />
          </a>
          <a
            href="https://facebook.com/ton_compte"
            aria-label="Visiter notre page Facebook"
          >
            <SocialIcon as={FacebookIcon} />
          </a>
          <a
            href="https://linkedin.com/company/ton_compte"
            aria-label="Visiter notre page LinkedIn"
          >
            <SocialIcon as={LinkedinIcon} />
          </a>
          <a
            href="https://instagram.com/ton_compte"
            aria-label="Visiter notre profil Instagram"
          >
            <SocialIcon as={InstagramIcon} />
          </a>
        </StyledSocialMedias>
      </StyledAdressSection>
    </StyledFooter>
  )
}

export default Footer
