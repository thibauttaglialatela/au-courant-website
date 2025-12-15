import PropTypes from 'prop-types'
import Button from '../Button'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardContainer = styled.dialog`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  z-index: 9999;
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid ${colors.secondary};
  border-radius: 8px;
  background-color: ${colors.white};
  max-width: max-content;
`
function RgpdModalCard({ close }) {
  return (
    <CardContainer open aria-labelledby="rgpd-title" onClick={close}>
      <Card onClick={(e) => e.stopPropagation()}>
        <h4 id="rgpd-title">Politique de confidentialité (résumé)</h4>
        <p>
          Nous collectons uniquement les informations nécessaires via notre
          formulaire de contact (nom, email, message).
        </p>
        <p>
          Aucune donnée n’est utilisée à des fins commerciales sans votre
          accord.
        </p>
        <p>
          Les données sont stockées en France chez notre hébergeur OVH (Roubaix)
          et conservées au maximum 12 mois.
        </p>
        <p>
          {' '}
          Vous pouvez demander à consulter, modifier ou supprimer vos données à
          tout moment.
        </p>
        <p>
          👉 Pour en savoir plus, consultez notre{' '}
          <a href="/politique-de-confidentialite">
            Politique de confidentialité complète.
          </a>
        </p>
        <Button $variant="secondary" $size="small" onClick={close} autoFocus>
          C'est compris
        </Button>
      </Card>
    </CardContainer>
  )
}

RgpdModalCard.propTypes = {
  close: PropTypes.func.isRequired,
}

export default RgpdModalCard
