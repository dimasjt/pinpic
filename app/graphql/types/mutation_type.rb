module Types
  class MutationType < Types::BaseObject
    field :createPlace, mutation: Mutations::CreatePlace
    field :oauth, mutation: Mutations::OAuth
    field :validate, mutation: Mutations::Validate
    field :login, mutation: Mutations::Login
    field :register, mutation: Mutations::Register
  end
end
