import styled from 'styled-components'
import Header from '../../components/Header'
import { useParams } from 'react-router'
import useApi from '../../utils/hooks/useApi'
import Loader from '../../components/Loader/index'
import Button from '../../components/Button/index'

const PrestationPageWrapper = styled.section`
    margin: 2.5rem 0.75rem 2.5rem 0.75rem;
    display: flex;
    justify-content: center;
  }
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
    return <p>Les données ne peuvent être chargée</p>
  }

  if (!prestation) return null

  return (
    <>
      <Header title={prestation.name} />
      <PrestationPageWrapper>
        <PrestationCard>
          <StyledImage src={prestation.image.url} alt={prestation.image.alt} />
          <StyledInformation>
            <p>{prestation.description}</p>
            <p>
              Tarif : <strong>{prestation.tarif} € TTC</strong>
            </p>
            <Button href="#" size="small">
              Demandez un devis
            </Button>
          </StyledInformation>
        </PrestationCard>
      </PrestationPageWrapper>
    </>
  )
}

export default ServiceDetailPage
