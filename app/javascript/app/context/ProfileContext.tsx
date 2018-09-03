import * as React from 'react'
import { Mutation } from 'react-apollo'
import Alert from 'react-s-alert'

import connectFacebookMutation from '@gql/mutation/connectFacebookMutation'

const Context = React.createContext({})

interface Props {
  children: JSX.Element
  connectFacebook: any
  setUser: any
  user: any
}

class ProfileContext extends React.Component<Props> {
  connectFacebook = ({ profile, tokenDetail: { accessToken } }) => {
    return new Promise((resolve, reject) => {
      this.props.connectFacebook({ variables: { accessToken } })
        .then(({ data: { connectFacebook } }) => {
          Alert.success("Successfully connect with Facebook")
          this.props.setUser(connectFacebook.user)
          resolve(connectFacebook)
        })
        .catch(error => {
          Alert.error("Can't connect with Facebook")
          reject(error)
        })
    })
  }

  connectInstagramByPage = (page) => {
    console.log(page)
  }

  render() {
    const value = {
      user: this.props.user,

      connectFacebook: this.connectFacebook,
      connectInstagramByPage: this.connectInstagramByPage,
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
    {(context) => <Component {...{...context, ...props}} />}
  </Context.Consumer>
)

const Provider = (props: any) => (
  <Mutation mutation={connectFacebookMutation}>
    {(connectFacebook) => (
      <ProfileContext
        connectFacebook={connectFacebook}
        {...props}
      />
    )}
  </Mutation>
)

export {
  Provider,
  withConsumer,
}
