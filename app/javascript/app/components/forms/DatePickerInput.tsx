import * as React from 'react'
import DatePicker from 'react-datepicker'
import {
  FormGroup,
  Label,
  FormFeedback,
} from 'reactstrap'
import shortid from 'shortid'

const DatePickerInput = ({ label, errors, field, ...rest}) => {
  const invalid = errors[field] && errors[field].length && true

  return (
    <FormGroup>
      <Label>{label}</Label>
      <DatePicker
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

export default DatePickerInput
