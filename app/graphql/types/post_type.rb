module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :type, String, null: false
    field :caption, String, null: true
    field :likes, Integer, null: true
    field :tags, [String], null: true
    field :media_id, String, null: true
    field :thumbnail, String, null: true
    field :medias, [Types::PostMediaType], null: true
  end
end
