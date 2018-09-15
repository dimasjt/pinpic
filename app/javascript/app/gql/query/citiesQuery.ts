import gql from 'graphql-tag'

export default gql`
query cities($limit: Int, $featured: Boolean) {
  cities(limit: $limit, featured: $featured) {
    id
    name
    image {
      id
      fileUrl
    }
    location {
      lat
      lng
    }
  }
}
`
