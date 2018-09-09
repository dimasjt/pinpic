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
}

const LoginForm: React.StatelessComponent<Props> = ({ onChange, onSubmit, email, password }) => (
  <Form onSubmit={onSubmit}>
    <Input
      field="email"
      type="email"
      placeholder="Your email"
      value={email}
      onChange={onChange}
      errors={[]}
      label="Email"
      autoComplete="email"
    />
    <Input
      field="password"
      type="password"
      placeholder="Your password"
      value={password}
      onChange={onChange}
      errors={[]}
      label="Password"
      autoComplete="current-password"
    />

    <Button onClick={onSubmit} type="submit">Login</Button>
  </Form>
)

export default LoginForm
