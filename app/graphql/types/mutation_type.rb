module Types
  class MutationType < Types::BaseObject
    field :instagramImages, mutation: Mutations::InstagramImages
    field :instagramMedia, mutation: Mutations::InstagramMedia
    field :oauth, mutation: Mutations::OAuth
    field :validate, mutation: Mutations::Validate
    field :login, mutation: Mutations::Login
    field :register, mutation: Mutations::Register
  end
end
