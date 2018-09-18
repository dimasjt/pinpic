import gql from 'graphql-tag'

export default gql`
query placeWeather($placeId: ID!) {
	placeWeather(placeId: $placeId) {
		location {
			lat
			lng
		}
		daily {
			icon
			summary
			temperatureMax
			temperatureMin
			time
		}
	}
}
`
