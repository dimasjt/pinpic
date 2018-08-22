module Types
  class ErrorType < Types::BaseObject
    field :message, String, null: false
    field :attribute, String, null: false
  end
end
