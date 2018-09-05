module Types
  class ImageType < Types::BaseObject
    field :id, ID, null: false
    field :file_url, String, null: false
    field :width, String, null: true
    field :height, String, null: true
  end
end
