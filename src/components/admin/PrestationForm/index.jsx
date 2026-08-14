import PropTypes from 'prop-types'

const PrestationForm = ({
  handleSubmit,
  successMessage,
  formErrors = {},
  formData = { name: '', tarif: '', description: '', url: '', alt: '' },
  setFormData,
  labelButton = 'Valider',
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
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
          name="name"
          className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
          value={formData.name}
          onChange={handleChange}
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
          name="tarif"
          className={`form-control ${formErrors.tarif ? 'is-invalid' : ''}`}
          value={formData.tarif}
          onChange={handleChange}
        />
        {formErrors.tarif && (
          <div className="invalid-feedback">{formErrors.tarif}</div>
        )}
      </section>

      <section className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          name="description"
          className={`form-control ${formErrors.description ? 'is-invalid' : ''}`}
          value={formData.description}
          onChange={handleChange}
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
          name="url"
          className={`form-control ${formErrors.url ? 'is-invalid' : ''}`}
          value={formData.url}
          onChange={handleChange}
        />
        {formErrors.url && (
          <div className="invalid-feedback">{formErrors.url}</div>
        )}
      </section>

      <section className="mb-3">
        <label className="form-label">Texte alternatif de l'image</label>
        <input
          type="text"
          name="alt"
          className={`form-control ${formErrors.alt ? 'is-invalid' : ''}`}
          value={formData.alt}
          onChange={handleChange}
        />
        {formErrors.alt && (
          <div className="invalid-feedback">{formErrors.alt}</div>
        )}
      </section>

      <button type="submit" className="btn btn-primary w-100">
        {labelButton}
      </button>
    </form>
  )
}

PrestationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  successMessage: PropTypes.string,
  formErrors: PropTypes.object.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tarif: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  labelButton: PropTypes.string,
}

export default PrestationForm
