module Types
  class TagType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false

    field :image, Types::ImageType, null: true
  end
end
