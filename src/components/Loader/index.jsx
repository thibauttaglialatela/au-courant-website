import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLoader = styled.div`
  border: 16px solid ${colors.primary};
  border-top: 16px solid ${colors.secondary};
  border-radius: 50%;
  width: clamp(40px, 8.33vw, 80px);
  height: clamp(40px, 8.33vw, 80px);
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50vh;
`
const StyledVisuallyHidden = styled.span`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`
const Loader = () => {
  return (
    <StyledLoaderWrapper role="status" aria-live="polite">
      <StyledLoader />
      <StyledVisuallyHidden>Chargement en cours...</StyledVisuallyHidden>
    </StyledLoaderWrapper>
  )
}

export default Loader
