import * as React from 'react'
import { ApolloProvider } from 'react-apollo'

import Routes from './Routes'
import { Provider } from '@context/MainContext'

import client from '@gql/client'

const App = () => (
  <ApolloProvider client={client}>
    <Provider>
      <Routes />
    </Provider>
  </ApolloProvider>
)

export default App