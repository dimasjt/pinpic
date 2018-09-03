import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import FacebookProvider from 'react-facebook'

import Routes from './Routes'
import { Provider } from '@context/MainContext'

import client from '@gql/client'

const appId = process.env.FACEBOOK_APP_ID

const App = () => (
  <ApolloProvider client={client}>
    <Provider>
      <FacebookProvider appId={appId}>
        <Routes />
      </FacebookProvider>
    </Provider>
  </ApolloProvider>
)

export default App
