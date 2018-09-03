import gql from 'graphql-tag'

export default gql`
mutation createSchedule(
	$caption: String!,
	$publishAt: String,
	$fileIds: [ID!]!,
  $pageIds: [ID!]!
) {
  createSchedule(
		caption: $caption,
		publishAt: $publishAt,
		fileIds: $fileIds,
    pageIds: $pageIds
	) {
    postSchedule {
      id
      caption
      publishAt
      medias {
        id
        mediaUrl
        type
      }
    }
    errors {
      message
      attribute
      type
    }
  }
}

`
