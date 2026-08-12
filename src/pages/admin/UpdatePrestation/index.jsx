import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Loader from '../../../components/Loader'

const EditPrestation = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // 1. State PLAT : Simple et compatible avec handleChange
  const [formData, setFormData] = useState({
    name: '',
    tarif: '',
    description: '',
    urlImage: '',
    altImage: '',
  })

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

        // 2. On extrait correctement les données depuis le DTO Symfony (data.image)
        setFormData({
          name: data.name || '',
          tarif: data.tarif || '',
          description: data.description || '',
          urlImage: data.image?.url || '',
          altImage: data.image?.alt || '',
        })
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPrestation()
  }, [id, apiUrl])

  // 3. Le handleChange fonctionne maintenant parfaitement pour TOUS les champs !
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(
        `${apiUrl}api/admin/prestations/edit/${id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(formData), // Envoie { name, tarif, description, urlImage, altImage }
        },
      )

      if (response.ok) {
        navigate('/admin', {
          state: { successMessage: 'Prestation modifiée avec succès !' },
        })
      } else {
        setError('Erreur lors de la modification')
      }
    } catch (error) {
      console.error(error)
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

      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white shadow-sm rounded w-50 mx-auto"
      >
        <section className="mb-3">
          <label className="form-label">Nom de la prestation</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </section>

        <section className="mb-3">
          <label className="form-label">Tarif de la prestation (€)</label>
          <input
            type="number"
            name="tarif"
            className="form-control"
            value={formData.tarif}
            onChange={handleChange}
            required
          />
        </section>

        <section className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={formData.description}
            name="description"
            onChange={handleChange}
            cols={30}
            rows={4}
            required
          ></textarea>
        </section>

        <section className="mb-3">
          <label className="form-label">URL de l'image</label>
          <input
            type="text"
            name="urlImage"
            className="form-control"
            value={formData.urlImage}
            onChange={handleChange}
            required
          />
        </section>

        <section className="mb-3">
          <label className="form-label">Texte alternatif de l'image</label>
          <input
            type="text"
            name="altImage"
            className="form-control"
            value={formData.altImage}
            onChange={handleChange}
            required
          />
        </section>

        <button type="submit" className="btn btn-primary w-100">
          Enregistrer les modifications
        </button>
      </form>
    </section>
  )
}

export default EditPrestation
