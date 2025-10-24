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

const HomePageWrapper = styled.section`
  margin: clamp(1rem, 3vw, 3.75rem);
`
const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: clamp(1.5rem, 6vw, 2rem);
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
const StyledHomeHeading2 = styled.h2`
  color: ${colors.black};
  text-align: center;

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
const StyledPrestations = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: clamp(1.5rem, 6vw, 2rem);

  @media screen and (min-width: 426px) {
    gap: 2rem;
    justify-content: center;
  }
`
function Home() {
  const options = useMemo(() => ({}), [])
  const {
    loading,
    error,
    data: dataPrestations,
  } = useApi('prestations/', options)

  if (error) {
    return <p>Erreur : {error}</p>
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
        <section>
          <StyledHomeHeading2>Nos prestations</StyledHomeHeading2>
          {loading ? (
            <Loader />
          ) : (
            <StyledPrestations>
              {dataPrestations.map((prestation) => (
                <ServiceCard
                  title={prestation.name}
                  price={prestation.tarif}
                  imageUrl={prestation.image.url}
                  imageAlt={prestation.image.alt}
                  key={prestation.id}
                />
              ))}
            </StyledPrestations>
          )}
        </section>
      </HomePageWrapper>
    </>
  )
}

export default Home
