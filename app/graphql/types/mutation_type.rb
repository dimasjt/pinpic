module Types
  class MutationType < Types::BaseObject
    field :validate, mutation: Mutations::Validate
    field :login, mutation: Mutations::Login
    field :register, mutation: Mutations::Register
  end
end
