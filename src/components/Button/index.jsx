import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../utils/style/colors'

const baseStyles = css`
  display: inline-block;
  font-family: inherit;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border: none;

  ${({ $size }) =>
    $size === 'small' &&
    css`
      padding: 0.625rem;
      font-size: 0.875rem;
      min-width: 4.6rem;
    `}

  ${({ $size }) =>
    $size === 'large' &&
    css`
      padding: 0.625rem;
      font-size: 0.75rem;
      width: 100%;
    `}

${({ $variant }) =>
    $variant === 'generic' &&
    css`
      background-color: ${colors.secondary};
      color: ${colors.black};

      &:hover {
        filter: brightness(1.15);
      }
    `}

    ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background-color: ${colors.white};
      color: ${colors.black};
      border: solid 1px ${colors.secondary};

      &:hover {
        filter: brightness(0.9);
      }
    `}
`
//Lien stylisé comme un bouton
const StyledLinkButton = styled.a`
  ${baseStyles}
`

//bouton classique
const StyledButton = styled.button`
  ${baseStyles}
`

/**
 * @param {string} href - Si présent -> lien <a>
 * @param {string} $variant - "generic" | "secondary"
 * @param {string} $size - "small" | "large"
 * @param {ReactNode} children - Texte ou contenu du bouton
 * @param {function} onClick - Fonction à exécuter
 */

function Button({
  href,
  onClick,
  children,
  variant = 'generic',
  size = 'large',
  ...rest
}) {
  if (href) {
    return (
      <StyledLinkButton href={href} $variant={variant} $size={size} {...rest}>
        {children}
      </StyledLinkButton>
    )
  }

  return (
    <StyledButton
      type="button"
      onClick={onClick}
      variant={variant}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
}

export default Button
