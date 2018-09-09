import * as React from 'react'
import {
  Button,
  Form,
} from 'reactstrap'
import Input from '@components/forms/Input'

interface Props {
  onChange: void
  onSubmit: any // TOOD: use the right type
  email: string
  password: string
  firstName: string
  lastName: string
}

const RegisterForm: React.StatelessComponent<Props> = ({ onChange, onSubmit, email, password, firstName, lastName }) => (
  <Form onSubmit={onSubmit}>
    <Input
      type="firstName"
      field="firstName"
      placeholder="Your first name"
      label="First name"
      value={firstName}
      onChange={onChange}
      errors={[]}
    />
    <Input
      type="lastName"
      field="lastName"
      placeholder="Your last name"
      label="Last name"
      value={lastName}
      onChange={onChange}
      errors={[]}
    />
    <Input
      type="email"
      field="email"
      placeholder="Your email"
      label="Email"
      value={email}
      onChange={onChange}
      errors={[]}
      autoComplete="email"
    />
    <Input
      type="password"
      field="password"
      placeholder="Your password"
      label="Password"
      value={password}
      onChange={onChange}
      errors={[]}
      autoComplete="current-password"
    />
    <Button onClick={onSubmit}>Register</Button>
  </Form>
)

export default RegisterForm
