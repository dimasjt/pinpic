module Types
  class PostScheduleType < Types::BaseObject
    field :id, ID, null: false
    field :caption, String, null: false

    field :publish_at, GraphQL::Types::ISO8601DateTime, null: false
    field :medias, [Types::PostMediaType], null: true
    field :pages, [Types::PageType], null: true
  end
end
