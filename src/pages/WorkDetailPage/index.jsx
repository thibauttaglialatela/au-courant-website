import { useParams } from 'react-router'
import Header from '../../components/Header'
import useApi from '../../utils/hooks/useApi'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import Page404 from '../../components/404Page'

const WorkPageWrapper = styled.section`
  margin: 2rem 0.75rem 2.5rem 0.75rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 426px) {
    margin: 3rem 3.75rem 4rem 3.75rem;
  }
`
const DescriptionSection = styled.article`
  margin-top: 2rem;
  margin-bottom: 2.5rem;
`
const DescriptionTitle = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;

  @media screen and (min-width: 426px) {
    text-align: left;
  }
`
const DescriptionContent = styled.p`
  margin-bottom: 1rem;

  @media screen and (min-width: 426px) {
    max-width: 75%;
    margin-bottom: 2rem;
  }
`
const DurationParagraph = styled.p`
  text-align: center;

  @media screen and (min-width: 426px) {
    text-align: left;
  }
`
const PicturesSection = styled.section`
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
`
const PicturesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 426px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
    max-width: fit-content;
    margin: 0 auto;
  }
`

const WorkImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`
const ButtonContainer = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 426px) {
    width: fit-content;
  }
`

const WorkDetailPage = () => {
  const { id } = useParams()
  const { loading, error, data } = useApi(`works/${id}`)

  /** 1️⃣ Loading */
  if (loading) return <Loader />

  /** 2️⃣ Error handling */
  if (error) {
    if (error.status === 404) {
      return <Page404 errorMessage={error.message} statusError={error.status} />
    }
    return <p>Erreur : {error.message}</p>
  }

  /** 3️⃣ Success */
  const dateObj = data?.startDate ? new Date(data.startDate) : null
  const formatedDate = dateObj
    ? new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(dateObj)
    : 'Date inconnue'

  return (
    <>
      <Header title={data?.client?.displayName ?? 'Travaux'} />
      <WorkPageWrapper>
        <DescriptionSection>
          <DescriptionTitle>Description des travaux effectués</DescriptionTitle>
          <DescriptionContent>{data?.description}</DescriptionContent>

          <DurationParagraph>
            Début des travaux : {formatedDate}
          </DurationParagraph>

          <DurationParagraph>
            Durée d'intervention : {data?.durationInDays} jours
          </DurationParagraph>
        </DescriptionSection>

        <PicturesSection>
          <DescriptionTitle>Photos du chantier</DescriptionTitle>

          <PicturesContainer>
            {data?.images?.length > 0 ? (
              data.images.map((image) => (
                <WorkImage
                  key={image.id ?? image.url}
                  src={image.url}
                  alt={image.alt}
                />
              ))
            ) : (
              <p>Aucune image disponible</p>
            )}
          </PicturesContainer>

          <ButtonContainer>
            <Button to="/works" $variant="generic" $size="large">
              Retour à la liste des travaux
            </Button>
          </ButtonContainer>
        </PicturesSection>
      </WorkPageWrapper>
    </>
  )
}

export default WorkDetailPage
