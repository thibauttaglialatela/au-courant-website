import { useState } from 'react'
import { useNavigate } from 'react-router'

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

    try {
      const response = await fetch(`${apiUrl}api/admin/prestations/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        navigate('/admin', {
          state: { successMessage: 'Prestation créée avec succés' },
        })
        setFormData({ name: '', tarif: '', description: '', url: '', alt: '' })
      } else if (response.status === 422) {
        const errorData = await response.json()

        const formattedError = {}
        errorData.violations.forEach((violation) => {
          formattedError[violation.field] = violation.message
        })

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

      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white shadow-sm rounded w-50 mx-auto"
      >
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        <section className="mb-3">
          <label className="form-label">Nom de la prestation</label>
          <input
            type="text"
            className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {formErrors.name && (
            <div className="invalid-feedback">{formErrors.name}</div>
          )}
        </section>

        <section className="mb-3">
          <label className="form-label">
            Tarif de la prestation en euros (€)
          </label>
          <input
            type="number"
            className={`form-control ${formErrors.tarif ? 'is-invalid' : ''}`}
            value={formData.tarif}
            onChange={(e) =>
              setFormData({ ...formData, tarif: e.target.value })
            }
          />
          {formErrors.tarif && (
            <div className="invalid-feedback">{formErrors.tarif}</div>
          )}
        </section>

        <section className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className={`form-control ${formErrors.description ? 'is-invalid' : ''}`}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            cols="30"
            rows="5"
            placeholder="Écrivez une description"
          ></textarea>
          {formErrors.description && (
            <div className="invalid-feedback">{formErrors.description}</div>
          )}
        </section>

        <section className="mb-3">
          <label className="form-label">URL Image</label>
          <input
            type="text"
            className={`form-control ${formErrors.url ? 'is-invalid' : ''}`}
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          />

          {formErrors.url && (
            <div className="invalid-feedback">{formErrors.url}</div>
          )}
        </section>

        <section className="mb-3">
          <label className="form-label">Texte alternatif de l'image</label>
          <input
            type="text"
            className={`form-control ${formErrors.alt ? 'is-invalid' : ''}`}
            value={formData.alt}
            onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
          />

          {formErrors.alt && (
            <div className="invalid-feedback">{formErrors.alt}</div>
          )}
        </section>

        <button type="submit" className="btn btn-primary w-100">
          Ajouter
        </button>
      </form>
    </>
  )
}

export default CreatePrestation
