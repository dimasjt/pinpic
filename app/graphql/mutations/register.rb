module Mutations
  class Register < Mutations::Base
    # TODO: define return fields
    # field :user, Types::UserType, null: true
    field :message, String, null: true
    field :errors, [Types::ErrorType], null: true

    # TODO: define arguments
    argument :email, String, required: true
    argument :password, String, required: true

    # TODO: define resolve method
    def resolve(args)
      user = User.new(args)
      if user.save
        { message: "success" }
      else
        { errors: errors(user) }
      end
    end
  end
end
