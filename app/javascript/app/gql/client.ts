import ApolloClient from "apollo-boost";

import { getToken } from '@utils/session'

const client = new ApolloClient({
  uri: "/api/graphql",
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
  },
  // onError: (error) => {
  // }
});

export default client