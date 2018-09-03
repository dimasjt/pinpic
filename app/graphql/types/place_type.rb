module Types
  class PlaceType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :description, String, null: true

    field :location, Types::CoordinateType, null: true
    field :city, Types::CityType, null: true
  end
end
