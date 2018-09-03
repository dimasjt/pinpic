module Types
  class PostMediaType < Types::BaseObject
    field :id, ID, null: false
    field :type, String, null: true
    field :media_url, String, null: true
  end
end
