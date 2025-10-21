import { css, keyframes } from 'styled-components'

const fadeInUpKeyframes = keyframes`
from {
opacity: 0;
  transform: translateY(30px);
}
  to {
  opacity: 1;
      transform: translateY(0);
  }
`

export const fadeInUp = css`
  animation: ${fadeInUpKeyframes} 0.8s ease-out forwards;
`
