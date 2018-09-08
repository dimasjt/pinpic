module Types
  class ImageType < Types::BaseObject
    field :id, ID, null: false
    field :file_url, String, null: false
    field :width, Integer, null: true
    field :height, Integer, null: true
  end
end
