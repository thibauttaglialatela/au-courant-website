import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  font-weight: 400;
  color: ${colors.black};
`
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* espace entre la case et le texte */
  margin: 1.5rem 0 1.5rem 0;
  font-weight: 400;
  color: ${colors.black};
`

const baseFieldStyles = `
  padding: 0.8rem;
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`

const StyledInput = styled.input`
  ${baseFieldStyles}
`

const StyledSelect = styled.select`
  ${baseFieldStyles}
`

const StyledTextarea = styled.textarea`
  ${baseFieldStyles}
  min-height: 12rem;
`
const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`

function FormField({
  id,
  name,
  label,
  placeholder,
  type = 'text',
  options = [],
  autocomplete,
  ref,
  ...rest
}) {
  if (type === 'checkbox') {
    return (
      <CheckboxLabel htmlFor={id}>
        <StyledCheckbox id={id} name={name} ref={ref} {...rest} />
        {label}
      </CheckboxLabel>
    )
  }

  return (
    <StyledLabel htmlFor={id}>
      {label}

      {type === 'select' && (
        <StyledSelect id={id} name={name} ref={ref} {...rest}>
          <option value="">--Choisissez une option--</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </StyledSelect>
      )}

      {type === 'textarea' && (
        <StyledTextarea
          id={id}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      )}

      {type !== 'select' && type !== 'textarea' && (
        <StyledInput
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autocomplete}
          ref={ref}
          {...rest}
        />
      )}
    </StyledLabel>
  )
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.string,
  ref: PropTypes.any,
  type: PropTypes.oneOf([
    'text',
    'email',
    'number',
    'select',
    'textarea',
    'checkbox',
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
}

export default FormField
