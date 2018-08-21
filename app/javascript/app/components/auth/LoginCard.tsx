import * as React from 'react'
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

import { withConsumer } from '@context/MainContext'

interface Props {
  loginUser: any
  validateToken: any
}

interface State {
  email: string
  password: string
  [field: string]: string
}

class LoginCard extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
  }

  login = () => {
    const user = { email: this.state.email, password: this.state.password }

    this.props.loginUser(user)
      // .then(response => {
      //   console.log(response)
      // })
      // .catch(error => {
      //   console.log(error)
      // })
  }

  onChange = (field: string, value: string): void => {
    this.setState({ [field]: value })
  }

  render() {
    return (
      <Card>
        <CardHeader>Login</CardHeader>
        <CardBody>
          <CardTitle>Login to PinPic</CardTitle>

          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                value={this.state.email}
                onChange={(event) => this.onChange('email', event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                value={this.state.password}
                onChange={(event) => this.onChange('password', event.target.value)}
              />
            </FormGroup>

            <Button onClick={this.login}>Login</Button>
            <Button onClick={this.props.validateToken}>Validate</Button>
          </Form>
        </CardBody>
      </Card>
    )
  }
}

export default withConsumer(LoginCard)