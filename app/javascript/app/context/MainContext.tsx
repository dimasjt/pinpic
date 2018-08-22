import * as React from 'react'
import { Mutation } from 'react-apollo'

import { User } from '@types'
import { setToken, removeToken } from '@utils/session'
import errorsHelper from '@utils/errorsHelper'

import validateMutation from '@gql/mutation/validateMutation'
import loginMutation from '@gql/mutation/loginMutation'
import registerMutation from '@gql/mutation/registerMutation'

const Context = React.createContext({})

interface State {
  user: User
  loggedIn: boolean
}

interface Props {
  children: JSX.Element
  loginUserMutation: any
  validateUserMutation: any
  registerUserMutation: any
}

class MainContext extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      user: null,
      loggedIn: false
    }
  }

  logoutUser = () => {
    removeToken()
    this.setState({ user: null, loggedIn: false })
  }

  loginUser = (variables) => {
    this.props.loginUserMutation({ variables })
      .then(({ data: { login } }) => {
        setToken(login.token)
        this.validateToken()
      })
  }

  registerUser = (variables) => {
    return new Promise((resolve, reject) => {
      this.props.registerUserMutation({ variables })
        .then(({ data: { register: { message, errors } } }) => {
          if (errors.length) {
            reject(errorsHelper(errors))
          } else {
            resolve(message)
          }
        })
    })
  }

  validateToken = () => {
    this.props.validateUserMutation()
      .then(({ data: { validate } }) => {
        this.setState({ user: validate.user, loggedIn: true })
      })
  }

  render() {
    const value = {
      user: this.state.user,

      logoutUser: this.logoutUser,
      loginUser: this.loginUser,
      validateToken: this.validateToken,
      registerUser: this.registerUser,
    }

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const withConsumer = (Component: any) => (props: any) => (
  <Context.Consumer>
    {(context: any) => <Component {...{...context, ...props}} />}
  </Context.Consumer>
)

const Provider = (props: any) => (
  <Mutation mutation={loginMutation}>
    {(loginUser) => (
      <Mutation mutation={validateMutation}>
        {(validateUser) => (
          <Mutation mutation={registerMutation}>
            {(registerUser) => (
              <MainContext
                loginUserMutation={loginUser}
                validateUserMutation={validateUser}
                registerUserMutation={registerUser}
                {...props}>
                {props.children}
              </MainContext>
            )}
          </Mutation>
        )}
      </Mutation>
    )}
  </Mutation>
)

export {
  Provider,
  withConsumer,
}