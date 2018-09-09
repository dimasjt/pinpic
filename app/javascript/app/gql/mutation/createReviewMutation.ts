import gql from 'graphql-tag'

export default gql`
mutation createReview($placeId: ID!, $message: String!, $rating: Int!) {
	createReview(placeId: $placeId, message: $message, rating: $rating) {
		errors {
			type
			message
			attribute
		}
		review {
			id
			message
			rating
			user {
				id
				firstName
				lastName
				avatar {
					original
					thumb
				}
			}
		}
	}
}
`
