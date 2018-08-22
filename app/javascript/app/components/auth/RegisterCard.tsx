import * as React from 'react'
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  Form,
} from 'reactstrap'
import Alert from 'react-s-alert'

import { withConsumer } from '@context/MainContext'
import { MainContextProps } from 'types'
import Input from '@components/forms/Input'

interface State {
  email: string
  password: string
  errors: any
  [field: string]: any
}

class RegisterCard extends React.Component<MainContextProps, State> {
  state = {
    email: '',
    password: '',
    errors: [],
  }

  register = () => {
    const user = { email: this.state.email, password: this.state.password }

    this.props.registerUser(user)
      .then(message => {
        Alert.info(message)
      })
      .catch(errors => {
        this.setState({ errors })
      })
  }

  onChange = (field: string, value: string): void => {
    this.setState({ [field]: value })
  }

  render() {
    return (
      <Card>
        <CardHeader>Register</CardHeader>
        <CardBody>
          <CardTitle>Register to PinPic</CardTitle>

          <Form onSubmit={this.register}>
            <Input
              type="email"
              field="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.onChange}
              errors={this.state.errors}
            />
            <Input
              type="password"
              field="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.onChange}
              errors={this.state.errors}
            />
            <Button onClick={this.register}>Register</Button>
          </Form>
        </CardBody>
      </Card>
    )
  }
}

export default withConsumer(RegisterCard)