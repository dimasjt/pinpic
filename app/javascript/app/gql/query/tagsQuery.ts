import gql from 'graphql-tag'

export default gql`
query tags {
  tags {
    id
    name
    image {
      id
      fileUrl
    }
  }
}
`
