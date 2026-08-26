import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Loader from '../../../components/Loader'
import PrestationForm from '../../../components/admin/PrestationForm'

const EditPrestation = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    tarif: '',
    description: '',
    url: '',
    alt: '',
  })

  const [formErrors, setFormErrors] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const baseUrl =
    import.meta.env.VITE_API_URL_DEV || import.meta.env.VITE_API_URL
  const apiUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`

  useEffect(() => {
    const fetchPrestation = async () => {
      try {
        const response = await fetch(`${apiUrl}api/admin/prestations/${id}`, {
          credentials: 'include',
        })

        if (!response.ok) throw new Error('Prestation introuvable')

        const data = await response.json()

        setFormData({
          name: data.name || '',
          tarif: data.tarif || '',
          description: data.description || '',
          url: data.image?.url || '',
          alt: data.image?.alt || '',
        })
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPrestation()
  }, [id, apiUrl])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormErrors({})

    const payload = {
      name: formData.name,
      tarif: formData.tarif !== '' ? Number(formData.tarif) : 0,
      description: formData.description,
      urlImage: formData.url,
      altImage: formData.alt,
    }

    try {
      const response = await fetch(
        `${apiUrl}api/admin/prestations/edit/${id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(payload),
        },
      )

      if (response.ok) {
        navigate('/admin', {
          state: { successMessage: 'Prestation modifiée avec succès !' },
        })
      } else if (response.status === 422) {
        const errorData = await response.json()
        const formattedError = {}

        if (Array.isArray(errorData.violations)) {
          errorData.violations.forEach((violation) => {
            const fieldName = violation.propertyPath || violation.field
            if (fieldName) formattedError[fieldName] = violation.message
          })
        }

        setFormErrors(formattedError)
      } else {
        setError('Erreur lors de la modification')
      }
    } catch (err) {
      console.error(err)
      setError('Erreur réseau')
    }
  }

  if (loading) return <Loader />
  if (error) return <div className="alert alert-danger m-4">{error}</div>

  return (
    <section className="container mt-4">
      <h1 className="text-center text-decoration-underline mb-4">
        Modifier la prestation #{id}
      </h1>

      <PrestationForm
        handleSubmit={handleSubmit}
        formErrors={formErrors}
        formData={formData}
        setFormData={setFormData}
        labelButton="Modifier"
      />
    </section>
  )
}

export default EditPrestation
