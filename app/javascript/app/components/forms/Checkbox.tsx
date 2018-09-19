import * as React from 'react'
import {
  FormGroup,
  Input,
  Label,
  FormFeedback,
} from 'reactstrap'

interface CheckboxProps {
  label: string
  value: string
  onChange: any
}

const Checkbox: React.SFC<CheckboxProps> = ({ label, value, onChange }) => (
  <FormGroup>
    <Label>
      <Input
        type="checkbox"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {label}
    </Label>
  </FormGroup>
)

export default Checkbox
