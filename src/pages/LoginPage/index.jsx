import Button from '../../components/Button'
import FormField from '../../components/FormField'
import Header from '../../components/Header'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useState } from 'react'
import Loader from '../../components/Loader'

const StyledErrorMessage = styled.p`
  color: ${colors.error};
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  gap: 0.5rem;
  width: 100%;

  @media screen and (min-width: 426px) {
    margin-bottom: 4rem;
    max-width: 27rem;
  }
`

const StyledLoginFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto 2.5rem auto;

  @media screen and (min-width: 426px) {
    margin: 3rem auto 4rem auto;
  }
`

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [apiError, setApiError] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setApiError(false)
    setLoading(true)

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + 'login_check',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data),
        },
      )

      if (!response.ok) {
        setApiError(true)
        return
      }
    } catch (err) {
      console.error(err)
      setApiError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header title={'Formulaire de connection'} />

      {(apiError || Object.keys(errors).length > 0) && (
        <StyledErrorMessage>Identifiants invalides</StyledErrorMessage>
      )}

      <StyledLoginFormWrapper>
        {loading ? (
          <Loader />
        ) : (
          <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormField
              name="username"
              label="Votre nom d'utilisateur"
              type="text"
              {...register('username', { required: true })}
            />

            <FormField
              name="password"
              label="Votre mot de passe"
              type="password"
              {...register('password', { required: true })}
            />

            <Button $variant="generic" $size="large" type="submit">
              Se connecter
            </Button>
          </StyledForm>
        )}
      </StyledLoginFormWrapper>
    </>
  )
}

export default LoginPage
