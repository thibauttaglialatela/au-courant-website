import Header from '../../components/Header/index.jsx'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import homePagePictureUrl from '../../assets/au-courant-illustration-homePage.jpg'
import aboutPictureUrl from '../../assets/about_section_illustration.jpg'
import { fadeInUp } from '../../utils/mixins/animations/fadeInUp.jsx'
import useApi from '../../utils/hooks/useApi.js'
import Loader from '../../components/Loader/index.jsx'
import { useMemo } from 'react'
import ServiceCard from '../../components/ServiceCard/index.jsx'
import CallToAction from '../../components/CallToAction/index.jsx'
import ProjectCard from '../../components/ProjectCard/index.jsx'
import PartnerCard from '../../components/PartnerCard/index.jsx'
import Carousel from '../../components/Carousel/index.jsx'
import CertificationCard from '../../components/CertificationCard/index.jsx'

const HomePageWrapper = styled.section`
  margin: clamp(1rem, 3vw, 3.75rem);
`
const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: clamp(2.5rem, 10vw, 4rem);
  ${fadeInUp};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: none;
    opacity: 1;
  }

  @media screen and (min-width: 426px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'title image'
      'description image';
    column-gap: 1.25rem;
  }
`
const HomeSectionWrapper = styled.section`
  margin-top: clamp(2.5rem, 4vw + 1rem, 4rem);
`
const CardsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(1rem, 2vw, 2rem);
  width: 100%;
  margin-top: clamp(1.5rem, 4vw, 2rem);
  ${fadeInUp};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: none;
    opacity: 1;
  }
`

const StyledHomeHeading2 = styled.h2`
  color: ${colors.black};
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 426px) {
    text-align: left;
    grid-area: title;
  }
`
const StyledImageAbout = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 1.5rem 0;

  @media screen and (min-width: 426px) {
    grid-area: image;
    margin: 0;
    height: clamp(250px, 38vw, 547px);
    object-position: 50% 25%;
    object-fit: cover;
  }
`

const StyledAboutDescription = styled.p`
  text-align: center;
  color: ${colors.black};
  line-height: 1.6;

  @media screen and (min-width: 426px) {
    text-align: left;
    grid-area: description;
    margin-top: 0;
    align-self: center;
    max-width: 60ch;
  }
`
function Home() {
  const options = useMemo(() => ({}), [])
  const {
    loading: loadingPrestations,
    error: errorPrestations,
    data: dataPrestations,
  } = useApi('prestations/', options)

  const {
    loading: loadingLastWorks,
    error: errorLastWorks,
    data: dataLastWorks,
  } = useApi('works/latest?limit=3&sort=end_date', options)

  const {
    loading: loadingPartners,
    error: errorPartners,
    data: dataPartners,
  } = useApi('partners/', options)

  const {
    loading: loadingValidCertifications,
    error: errorValidCertifications,
    data: dataValidCertifications,
  } = useApi('certifications/?valid=true', options)

  if (errorPrestations) {
    return <p>Erreur : {errorPrestations}</p>
  }

  if (errorLastWorks) {
    return <p>Erreur: {errorLastWorks}</p>
  }

  if (errorPartners) {
    return <p>Erreur : {errorPartners}</p>
  }

  if (errorValidCertifications) {
    return <p>Erreur : {errorValidCertifications}</p>
  }

  return (
    <>
      <Header
        title="Au courant"
        imageSrc={homePagePictureUrl}
        imageAlt="électricien travaillant sur un compteur"
      />
      <HomePageWrapper>
        <AboutSection>
          <StyledHomeHeading2>A propos</StyledHomeHeading2>
          <StyledImageAbout
            src={aboutPictureUrl}
            alt="électricien utilisant une perceuse"
          />
          <StyledAboutDescription>
            Artisan électricien basé à Paris j’accompagne particuliers et
            professionnels dans leurs projets depuis plus de 10
            ans.Installations neuves, rénovation, domotique, dépannage rapide :
            je propose des solutions fiables, actuelles et sur mesure.Un seul
            objectif : allier sécurité, performance et esthétique dans chaque
            intervention. Réactif, transparent et à l’écoute, je m’adapte à vos
            besoins avec sérieux et efficacité.
          </StyledAboutDescription>
        </AboutSection>
        <HomeSectionWrapper>
          <StyledHomeHeading2>Nos prestations</StyledHomeHeading2>
          {loadingPrestations ? (
            <Loader />
          ) : (
            <CardsWrapper>
              {dataPrestations.map((prestation) => (
                <ServiceCard
                  title={prestation.name}
                  price={prestation.tarif}
                  imageUrl={prestation.image.url}
                  imageAlt={prestation.image.alt}
                  key={prestation.id}
                  id={prestation.id}
                />
              ))}
            </CardsWrapper>
          )}
        </HomeSectionWrapper>
        <CallToAction
          CTAText="Une de nos prestations vous intéresse ? N’hésitez pas"
          linkHref="#"
        />
        {/* Partie derniers travaux */}
        <HomeSectionWrapper>
          <StyledHomeHeading2>nos derniéres réalisations</StyledHomeHeading2>
          <CardsWrapper>
            {loadingLastWorks ? (
              <Loader />
            ) : (
              dataLastWorks.map((work) => (
                <ProjectCard
                  url={work.image.url}
                  alt={work.image.alt}
                  client={work.client.displayName}
                  endDate={work.endDate}
                  key={work.id}
                  id={work.id}
                />
              ))
            )}
          </CardsWrapper>
        </HomeSectionWrapper>
        {/* Ils nous font confiance */}
        <HomeSectionWrapper>
          <StyledHomeHeading2>Ils nous font confiance</StyledHomeHeading2>
          <CardsWrapper>
            {loadingPartners ? (
              <Loader />
            ) : (
              dataPartners.map((partner) => (
                <PartnerCard
                  key={partner.id}
                  url={partner.image.url}
                  alt={partner.image.alt}
                  linkWebsite={partner.site_web}
                  partnerName={partner.name}
                />
              ))
            )}
          </CardsWrapper>
        </HomeSectionWrapper>
        {/* Avis clients */}
        <HomeSectionWrapper>
          <StyledHomeHeading2>Les avis de nos clients</StyledHomeHeading2>
          <Carousel />
        </HomeSectionWrapper>
        <HomeSectionWrapper>
          <StyledHomeHeading2>Certifications</StyledHomeHeading2>
          <CardsWrapper>
            {loadingValidCertifications ? (
              <Loader />
            ) : (
              dataValidCertifications.map((certification) => (
                <CertificationCard
                  key={certification.id}
                  certificationName={certification.name}
                  pictureUrl={certification.image.url}
                  pictureAlt={certification.image.alt}
                />
              ))
            )}
          </CardsWrapper>
        </HomeSectionWrapper>

        {/* Mettre le CTA invitant à demander un devis */}
        <CallToAction
          CTAText="Demandez votre devis gratuit en ligne et discutons de votre projet"
          linkHref="#"
        />
      </HomePageWrapper>
    </>
  )
}

export default Home
