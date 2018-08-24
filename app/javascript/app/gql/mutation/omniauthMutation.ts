import gql from 'graphql-tag'

export default gql`
mutation omniauth($code: String!, $state: String!) {
	omniauth(code: $code, state: $state) {
		user
	}
}
`