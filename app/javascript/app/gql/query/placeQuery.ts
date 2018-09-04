import gql from 'graphql-tag'

export default gql`
query place($id: ID!) {
	place(id: $id) {
		id
		name
		description
		slug
		location {
			lat
			lng
		}
		city {
			id
			name
			location {
				lat
				lng
			}
		}
    images {
      id
      fileUrl
    }
	}
}
`
