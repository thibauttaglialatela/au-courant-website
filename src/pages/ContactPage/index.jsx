import styled from 'styled-components'
import Header from '../../components/Header'
import typography from '../../utils/style/typography'
import FormField from '../../components/FormField'
import Button from '../../components/Button'
import RgpdModalCard from '../../components/RgpdModalCard'
import MapCard from '../../components/MapCard'
import { useForm } from 'react-hook-form'
import colors from '../../utils/style/colors'
import { useState } from 'react'

const ContactWrapper = styled.section`
  margin: 2.5rem 0.75rem 2.5rem 0.75rem;

  @media screen and (min-width: 426px) {
    margin: 3rem 3.75rem 4rem 3.75rem;
  }
`
const AddressWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledAddress = styled.address`
  font-size: ${typography.fontSizes.body};
  text-align: center;
  line-height: 1.6;

  @media screen and (min-width: 426px) {
    font-size: ${typography.fontSizesDesktop.body};
  }
`

const AddressSectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 426px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`
const StyledErrorMessage = styled.p`
  color: ${colors.error};
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  gap: 0.5rem;

  @media screen and (min-width: 426px) {
    margin-bottom: 4rem;
    max-width: 27rem;
  }
`

function ContactPage() {
  const [isPrivacyModelOpen, setPrivacyModelOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    console.log('📩 Données envoyées :', data)
  }

  return (
    <>
      <Header title="Formulaire de contact" />

      {isPrivacyModelOpen && (
        <RgpdModalCard close={() => setPrivacyModelOpen(false)} />
      )}
      <ContactWrapper>
        <AddressWrapper>
          <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
            <FormField
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              id="name"
              name="name"
              label="Nom"
              placeholder="John Doe"
              type="text"
              autocomplete="name"
              {...register('name', { required: 'Veuillez fournir votre nom' })}
            />
            {errors.name && (
              <StyledErrorMessage>{errors.name.message}</StyledErrorMessage>
            )}
            <FormField
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              id="email"
              name="email"
              label="Email"
              placeholder="john.doe@mail.fr"
              type="email"
              autocomplete="off"
              {...register('email', {
                required: 'Un email est obligatoire',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "format d'email invalide",
                },
              })}
            />
            {errors.email && (
              <StyledErrorMessage>{errors.email.message}</StyledErrorMessage>
            )}
            <FormField
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              id="phone"
              name="phone"
              label="Téléphone"
              placeholder="XX.XX.XX.XX.XX"
              type="tel"
              autocomplete="tel"
              {...register('phone', {
                required:
                  'Nous avons besoin de votre numéro pour vous rappeler au besoin',
                pattern: {
                  value: /^(?:0|\+33|0033)[1-9](?:[\s.-]?\d{2}){4}$/,
                  message: 'téléphone non valide',
                },
              })}
            />
            {errors.phone && (
              <StyledErrorMessage>{errors.phone.message}</StyledErrorMessage>
            )}
            <FormField
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              id="subject"
              name="subject"
              label="Sujet"
              type="select"
              {...register('subject', {
                required: 'Veuillez choisir un sujet',
              })}
              options={[
                { value: 'devis', label: 'Demande de devis' },
                { value: 'info', label: 'Demande de renseignement' },
              ]}
            />
            {errors.subject && (
              <StyledErrorMessage>{errors.subject.message}</StyledErrorMessage>
            )}
            <FormField
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              id="message"
              name="message"
              label="Message"
              type="textarea"
              placeholder="Votre message..."
              {...register('message', {
                required: 'Quel est votre message ?',
                maxLength: {
                  value: 500,
                  message: 'Votre message est trop long',
                },
              })}
            />
            {errors.message && (
              <StyledErrorMessage>{errors.message.message}</StyledErrorMessage>
            )}
            {/* case à cocher pour accepter le RGPD */}
            <FormField
              aria-invalid={!!errors.rgpd}
              aria-describedby={errors.rgpd ? 'rgpd-error' : undefined}
              id="rgpd"
              name="rgpd"
              type="checkbox"
              label="Veuillez lire et accepter la politique de confidentialité."
              {...register('rgpd', {
                required: 'Vous devez accepter la politique de confidentialité',
              })}
            />
            {errors.rgpd && (
              <StyledErrorMessage>{errors.rgpd.message}</StyledErrorMessage>
            )}
            <Button
              type="button"
              $variant="secondary"
              $size="small"
              onClick={() => setPrivacyModelOpen(true)}
            >
              Lire la politique de confidentialité
            </Button>
            <Button $variant="generic" $size="large" type="submit">
              Envoyer
            </Button>
          </StyledForm>

          <AddressSectionTitle>Où nous trouver ?</AddressSectionTitle>
          <MapCard />
          <StyledAddress>
            2 rue Chevreul
            <br />
            94700 Maisons-Alfort
            <br />
            01 48 99 36 22
            <br />
            <a href="mailto:contact@aucourant.fr">contact@aucourant.fr</a>
          </StyledAddress>
        </AddressWrapper>
      </ContactWrapper>
    </>
  )
}

export default ContactPage
