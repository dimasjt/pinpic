import * as React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from 'reactstrap'
import Alert from 'react-s-alert'
import { withStateHandlers, compose, withHandlers } from 'recompose'

import LoginForm from './form/LoginForm'
import { withConsumer } from '@context/MainContext'
import history from '@utils/history'

interface Props {
  onChange: void
  onSubmit: void
  email: string
  password: string
}

const LoginCard: React.StatelessComponent<Props> = ({ onChange, onSubmit, email, password }) => (
  <Card>
    <CardHeader>Login</CardHeader>
    <CardBody>
      <CardTitle>Login to PinPic</CardTitle>

      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        email={email}
        password={password}
      />
    </CardBody>
  </Card>
)

const enhance = compose(
  withConsumer,
  withStateHandlers({
    email: '',
    password: ''
  }, {
    onChange: () => (field, value) => ({ [field]: value })
  }),
  withHandlers({
    onSubmit: ({ email, password, loginUser }) => event => {
      event.preventDefault()
      const user = { email, password }

      loginUser(user)
        .then(() => {
          history.push('/dashboard')
          Alert.success('Login successfully')
        })
        .catch(errors => {
          Alert.error(errors && errors[0].message)
        })
    }
  })
)

export default enhance(LoginCard)
