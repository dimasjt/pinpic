import gql from 'graphql-tag'

export default gql`
mutation connectFacebook($accessToken: String!) {
  connectFacebook(accessToken: $accessToken) {
    user {
      id
      email
      accounts {
        provider
        uid
      }
    }
    errors
  }
}
`
