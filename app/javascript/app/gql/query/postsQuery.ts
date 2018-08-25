import gql from 'graphql-tag'

export default gql`
query posts {
	posts {
		id
		caption
		likes
		tags
		type
		tags
		mediaId
		thumbnail
	}
}
`