module Types
  class CityType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false

    field :location, Types::CoordinateType, null: true
    field :image, Types::ImageType, null: true
  end
end
