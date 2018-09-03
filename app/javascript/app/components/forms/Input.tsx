import * as React from 'react'
import {
  FormGroup,
  Input as FormInput,
  Label,
  FormFeedback,
} from 'reactstrap'
import shortid from 'shortid'

const Input = ({ field, type, placeholder, value, onChange, errors, label }) => {
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
