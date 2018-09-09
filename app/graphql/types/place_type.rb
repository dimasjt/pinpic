module Types
  class PlaceType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :description, String, null: true
    field :slug, String, null: false
    field :address, String, null: true
    field :average_rating, Float, null: true

    field :location, Types::CoordinateType, null: true
    field :city, Types::CityType, null: true
    field :images, [Types::ImageType], null: true
    field :reviews, [Types::ReviewType], null: true
  end
end
