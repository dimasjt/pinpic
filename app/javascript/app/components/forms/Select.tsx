import * as React from 'react'
import {
  FormGroup,
  Label,
  FormFeedback,
} from 'reactstrap'
import ReactSelect from 'react-select'

const Select = ({ label, options, onChange, config }) => (
  <FormGroup>
    <Label>{label}</Label>
    <ReactSelect
      options={options}
      onChange={onChange}
      {...config}
    />
  </FormGroup>
)

export default Select
