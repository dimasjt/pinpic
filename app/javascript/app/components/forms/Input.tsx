import * as React from 'react'
import {
  FormGroup,
  Input as FormInput,
  Label,
  FormFeedback,
} from 'reactstrap'
import shortid from 'shortid'

interface InputProps {
  onChange: any
  field: string
  type: any
  placeholder?: string
  value: string
  errors?: any[]
  label: string
  autoComplete?: string
}

const Input: React.StatelessComponent<InputProps> = ({ onChange, field, type, placeholder, value, errors, label, ...rest }) => {
  const invalid = errors[field] && errors[field].length && true

  return (
    <FormGroup>
      <Label for={field}>{label}</Label>
      <FormInput
        type={type}
        name={field}
        id={field}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(field, event.target.value)}
        invalid={invalid}
        {...rest}
      />

      {
        invalid && errors[field].map(message => (
          <FormFeedback key={shortid.generate()}>
            {message}
          </FormFeedback>
        ))
      }
    </FormGroup>
  )
}

export default Input
