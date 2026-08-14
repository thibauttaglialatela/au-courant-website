import { useState } from 'react'
import { useNavigate } from 'react-router'
import PrestationForm from '../../../components/admin/PrestationForm'

const CreatePrestation = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    tarif: '',
    description: '',
    url: '',
    alt: '',
  })

  const [formErrors, setFormErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormErrors({})
    setSuccessMessage('')

    const baseUrl =
      import.meta.env.VITE_API_URL_DEV || import.meta.env.VITE_API_URL
    const apiUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`

    const payload = {
      name: formData.name,
      tarif: formData.tarif !== '' ? Number(formData.tarif) : 0,
      description: formData.description,
      url: formData.url,
      alt: formData.alt,
    }

    try {
      const response = await fetch(`${apiUrl}api/admin/prestations/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        navigate('/admin', {
          state: { successMessage: 'Prestation créée avec succès' },
        })
      } else if (response.status === 422) {
        const errorData = await response.json()
        const formattedError = {}

        if (Array.isArray(errorData.violations)) {
          errorData.violations.forEach((violation) => {
            const fieldName = violation.propertyPath || violation.field
            if (fieldName) {
              formattedError[fieldName] = violation.message
            }
          })
        }

        setFormErrors(formattedError)
      }
    } catch (error) {
      console.error('Erreur réseau', error.message)
    }
  }

  return (
    <>
      <h1 className="text-center text-decoration-underline mb-4">
        Ajouter une prestation
      </h1>

      <PrestationForm
        handleSubmit={handleSubmit}
        successMessage={successMessage}
        formErrors={formErrors}
        formData={formData}
        setFormData={setFormData}
        labelButton="Ajouter"
      />
    </>
  )
}

export default CreatePrestation
