module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :user, Types::UserType, null: false do
      argument :id, ID, required: true
    end

    field :search_places, [Types::PlaceType], null: false

    def user(id:)
      User.find(id)
    end

    def search_places
      Place.all
    end

  end
end
