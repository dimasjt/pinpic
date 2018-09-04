import gql from 'graphql-tag'

export default gql`
mutation createPlace(
	$name: String!,
	$address: String!,
	$cityId: ID!,
	$description: String!,
	$fileIds: [ID!]!,
	$latitude: String!,
	$longitude: String!,
  $tagIds: [ID!]
) {
	createPlace(
		name: $name,
		address: $address,
		cityId: $cityId,
		description: $description,
		fileIds: $fileIds,
		latitude: $latitude,
		longitude: $longitude,
    tagIds: $tagIds
	) {
		place {
			id
			name
      slug
		}
		errors {
			attribute
			message
			type
		}
	}
}
`
