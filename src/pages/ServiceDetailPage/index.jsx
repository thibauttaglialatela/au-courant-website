import styled from 'styled-components'
import Header from '../../components/Header'
import { useParams } from 'react-router'
import useApi from '../../utils/hooks/useApi'
import Loader from '../../components/Loader/index'
import Button from '../../components/Button/index'
import Page404 from '../../components/404Page'

const PrestationPageWrapper = styled.section`
  margin: 2.5rem 0.75rem 2.5rem 0.75rem;
  display: flex;
  justify-content: center;
`
const PrestationCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: clamp(18.75rem, 100%, 66rem);
  margin: 0 auto;

  @media screen and (min-width: 426px) {
    flex-direction: row;
    gap: 2rem;
  }
`
const StyledInformation = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 426px) {
    justify-content: center;
  }
`

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`

function ServiceDetailPage() {
  const { prestationId } = useParams()
  const {
    loading,
    error,
    data: prestation,
  } = useApi(`prestations/${prestationId}`)

  if (loading) return <Loader />

  if (error) {
    if (error.status === 404) {
      return (
        <Page404
          errorMessage={error.message}
          statusError={error.status}
          buttonLabel="Retour à l'accueil"
          buttonLink="/"
        />
      )
    }
    return <p>Erreur : {error.message}</p>
  }

  if (!prestation) {
    return (
      <Page404
        errorMessage="Aucune donnée trouvée"
        statusError=""
        buttonLabel="Retour"
        buttonLink="/"
      />
    )
  }

  return (
    <>
      <Header title={prestation.name} />
      <PrestationPageWrapper>
        <PrestationCard>
          {prestation.image && (
            <StyledImage
              src={prestation.image.url}
              alt={prestation.image.alt || 'Illustration de la prestation'}
            />
          )}
          <StyledInformation>
            <p>{prestation.description}</p>
            <p>
              Tarif : <strong>{prestation.tarif} € TTC</strong>
            </p>
            <Button to="#" size="small">
              Demandez un devis
            </Button>
          </StyledInformation>
        </PrestationCard>
      </PrestationPageWrapper>
    </>
  )
}

export default ServiceDetailPage
