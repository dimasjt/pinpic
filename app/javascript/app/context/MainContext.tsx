import * as React from 'react'
import { Mutation } from 'react-apollo'

import { User } from '@types'
import { setToken, removeToken } from '@utils/session'

import validateMutation from '@gql/mutation/validateMutation'
import loginMutation from '@gql/mutation/loginMutation'

const Context = React.createContext({})

interface State {
  user: User
}

interface Props {
  children: JSX.Element
  loginUserMutation: any
  validateUserMutation: any
}

class MainContext extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      user: null,
    }
  }

  logoutUser = () => {
    removeToken()
    this.setState({ user: null })
  }

  loginUser = (variables) => {
    this.props.loginUserMutation({ variables })
      .then(({ data: { login } }) => {
        setToken(login.token)
        this.validateToken()
      })
  }

  validateToken = () => {
    this.props.validateUserMutation()
      .then(({ data: { validate } }) => {
        this.setState({ user: validate.user })
      })
  }

  render() {
    const value = {
      user: this.state.user,

      logoutUser: this.logoutUser,
      loginUser: this.loginUser,
      validateToken: this.validateToken,
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
          <MainContext
            loginUserMutation={loginUser}
            validateUserMutation={validateUser}
            {...props}>
            {props.children}
          </MainContext>
        )}
      </Mutation>
    )}
  </Mutation>
)

export {
  Provider,
  withConsumer,
}