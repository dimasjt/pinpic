import gql from 'graphql-tag'

export default gql`
mutation validate {
	validate {
		user {
			id
			email
		}
	}
}
`