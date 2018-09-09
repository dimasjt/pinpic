import gql from 'graphql-tag'

export default gql`
query searchPlaces {
	searchPlaces {
		id
		name
		description
		slug
		averageRating
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
