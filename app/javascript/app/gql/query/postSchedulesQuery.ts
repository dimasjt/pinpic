import gql from 'graphql-tag'

export default gql`
query postSchedules {
	postSchedules {
		id
		caption
		publishAt
		pages {
			id
			uid
			name
			instagramId
		}
		medias {
			id
			mediaUrl
			type
		}
	}
}
`
