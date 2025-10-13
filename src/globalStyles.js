import { createGlobalStyle } from 'styled-components'
import colors from './utils/style/colors'
import typography from './utils/style/typography'

const GlobalStyle = createGlobalStyle`
/* reset léger */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
}

body {
    font-family: ${typography.fontFamilies.body};
    font-size: ${typography.fontSizes.body};
    line-height: ${typography.lineHeights.body};
    color: ${colors.black};
    background-color: ${colors.white};
}

h1, h2, h3, h4, h5, h6 {
    font-family: ${typography.fontFamilies.heading};
    line-height: ${typography.lineHeights.heading};
    font-weight: 600; /* valeur par défaut, ajustée dans composants */
}

h1 { font-size: ${typography.fontSizes.h1}; font-weight: 800; }
h2 { font-size: ${typography.fontSizes.h2}; font-weight: 700; }
h3 { font-size: ${typography.fontSizes.h3}; font-weight: 600; }
h4 { font-size: ${typography.fontSizes.h4}; font-weight: 500; }

p {
    font-size: ${typography.fontSizes.body};
    margin-bottom: 1rem;
    font-weight: 400;
}

strong { font-weight: 600; }

a {
  line-height: ${typography.lineHeights.body};
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 500;
  transition: opacity 0.2s ease;
  cursor: pointer;
}

a:hover { opacity: 0.8; }

a:focus-visible {
  outline: 2px dashed ${colors.primary};
  outline-offset: 2px;
}

ul, ol {
  list-style-type: none;
}


@media screen and (min-width: 426px) {
  h1 { font-size: ${typography.fontSizesDesktop.h1}; }
  h2 { font-size: ${typography.fontSizesDesktop.h2}; }
  h3 { font-size: ${typography.fontSizesDesktop.h3}; }
  h4 { font-size: ${typography.fontSizesDesktop.h4}; }
  p  { font-size: ${typography.fontSizesDesktop.body}; }
}
`

export default GlobalStyle
