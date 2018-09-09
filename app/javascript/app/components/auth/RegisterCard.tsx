import * as React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from 'reactstrap'
import Alert from 'react-s-alert'
import { compose, withStateHandlers, withHandlers } from 'recompose'

import { withConsumer } from '@context/MainContext'
import RegisterForm from './form/RegisterForm'

interface Props {
  onChange: any
  onSubmit: any
  email: string
  password: string
  firstName: string
  lastName: string
}

const RegisterCard: React.StatelessComponent<Props> = ({ onChange, onSubmit, email, password, firstName, lastName }) => (
  <Card>
    <CardHeader>Register</CardHeader>
    <CardBody>
      <CardTitle>Register to PinPic</CardTitle>

      <RegisterForm
        onChange={onChange}
        onSubmit={onSubmit}
        email={email}
        password={password}
        firstName={firstName}
        lastName={lastName}
      />
    </CardBody>
  </Card>
)

const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const enhance = compose(
  withConsumer,
  withStateHandlers({
    ...defaultState,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
    resetState: () => () => ({ ...defaultState })
  }),
  withHandlers({
    onSubmit: ({ registerUser, resetState, email, password, firstName, lastName }) => event => {
      event.preventDefault()
      const user = { email, password, firstName, lastName }

      registerUser(user)
        .then(message => {
          Alert.info(message)
          resetState()
        })
        .catch(errors => {
          console.log(errors)
        })
    }
  })
)

export default enhance(RegisterCard)
