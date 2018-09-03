module Types
  class MutationType < Types::BaseObject
    field :connectFacebook, mutation: Mutations::ConnectFacebook
    field :createSchedule, mutation: Mutations::CreateSchedule
    field :instagramImages, mutation: Mutations::InstagramImages
    field :instagramMedia, mutation: Mutations::InstagramMedia
    field :oauth, mutation: Mutations::OAuth
    field :validate, mutation: Mutations::Validate
    field :login, mutation: Mutations::Login
    field :register, mutation: Mutations::Register
  end
end
