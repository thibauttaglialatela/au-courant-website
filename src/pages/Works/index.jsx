import Header from '../../components/Header'
import styled from 'styled-components'
import useApi from '../../utils/hooks/useApi'
import Loader from '../../components/Loader'
import ProjectCard from '../../components/ProjectCard'
import { useState } from 'react'
import CallToAction from '../../components/CallToAction'
import Button from '../../components/Button'

const WorksPageWrapper = styled.section`
  margin: 2.5rem 0.75rem 2.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 426px) {
    margin: 3rem 3.75rem 4rem 3.75rem;
  }
`
const WorksContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media screen and (min-width: 426px) {
    flex-direction: row;
    gap: 2rem;
  }
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem auto 2.5rem auto;
  max-width: fit-content;
  gap: 1rem;

  @media screen and (min-width: 426px) {
    margin: 2rem auto 3.5rem auto;
    gap: 10rem;
  }
`
function Works() {
  const [page, setPage] = useState(1)
  const {
    loading,
    error,
    data: works,
  } = useApi(`works/list?page=${page}&limit=3`)

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    setPage(page - 1)
  }

  const lastPage = Math.ceil(works?.total / works?.limit)

  if (loading) return <Loader />
  if (error) return <p>Les données ne peuvent être chargée</p>
  if (!works) return null

  return (
    <>
      <Header title="Réalisations" />
      <WorksPageWrapper>
        <WorksContainer>
          {works.items.map((work) => (
            <ProjectCard
              key={work.id}
              url={work.image.url}
              alt={work.image.alt}
              client={work.client.displayName}
              endDate={work.endDate}
              id={work.id}
            />
          ))}
        </WorksContainer>

        {/* créer une div pour les pages accessible avec une fléche pour changer de page */}
        {page === 1 ? (
          <NavWrapper>
            <Button $variant="generic" $size="small" onClick={() => nextPage()}>
              Page suivante
            </Button>
          </NavWrapper>
        ) : page === lastPage ? (
          <NavWrapper>
            <Button $variant="generic" $size="small" onClick={() => prevPage()}>
              Page précédente
            </Button>
          </NavWrapper>
        ) : (
          <NavWrapper>
            <Button $variant="generic" $size="small" onClick={() => prevPage()}>
              Page précédente
            </Button>
            <Button $variant="generic" $size="small" onClick={() => nextPage()}>
              Page suivante
            </Button>
          </NavWrapper>
        )}

        {/* ajout du CTA */}
        <CallToAction CTAText="vous étes intéressé ?" linkHref="#" />
      </WorksPageWrapper>
    </>
  )
}

export default Works
