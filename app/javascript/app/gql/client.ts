import ApolloClient from "apollo-boost";

import { getToken } from '@utils/session'

const client = new ApolloClient({
  uri: "/graphql",
  request: function(operation: any) {
    const token = getToken()
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${getToken()}`
        }
      })
    }

    return Promise.resolve(operation)
  }
});

export default client