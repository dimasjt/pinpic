import * as React from 'react'
import { ApolloProvider } from 'react-apollo'

import Routes from './Routes'
import Navbar from '@components/layout/Navbar'

import client from '@gql/client'

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Navbar />
      <Routes />
    </div>
  </ApolloProvider>
)

export default App