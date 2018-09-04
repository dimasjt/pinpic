import gql from 'graphql-tag'

export default gql`
query cities {
  cities {
    id
    name
    location {
      lat
      lng
    }
  }
}
`
