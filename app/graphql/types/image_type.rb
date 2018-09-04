module Types
  class ImageType < Types::BaseObject
    field :id, ID, null: false
    field :file_url, String, null: false
  end
end
