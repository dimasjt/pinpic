module Types
  class QueryType < Types::BaseObject
    field :user, Types::UserType, null: false do
      argument :id, ID, required: true
    end

    field :search_places, [Types::PlaceType], null: false
    field :place, Types::PlaceType, null: false do
      argument :id, ID, required: true
    end
    field :cities, [Types::CityType], null: false do
      argument :limit, Integer, required: false, default_value: 10
      argument :featured, Boolean, required: false
    end
    field :tags, [Types::TagType], null: false
    field :place_weather, Types::WeatherType, null: false do
      argument :place_id, ID, required: true
    end

    def user(id:)
      User.find(id)
    end

    def search_places
      Place.with_status(:approved).sort(average_rating: -1)
    end

    def place(id:)
      Place.with_status(:approved).find(id)
    end

    def cities(limit:, featured:)
      scope = City.all
      scope = scope.where(featured: true) if featured
      scope.limit(limit)
    end

    def tags
      Tag.all
    end

    def place_weather(place_id:)
      place = Place.with_status(:approved).find(place_id)
      weather = WeatherPlace.new(place).weather
      weather || GraphQL::ExecutionError.new("Can't fetch weather")
    end

  end
end
