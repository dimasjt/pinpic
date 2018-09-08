import gql from 'graphql-tag'

export default gql`
mutation wishlistPlace($placeId: ID!) {
	wishlistPlace(placeId: $placeId) {
		wishlist {
			id
		}
		state
		errors {
			attribute
			message
			type
		}
	}
}
`
