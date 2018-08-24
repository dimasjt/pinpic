import gql from 'graphql-tag'

export default gql`
mutation oauth($code: String!, $state: String!) {
	oauth(code: $code, state: $state) {
		user
	}
}
`