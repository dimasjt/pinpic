module Mutations
  class Register < Mutations::Base
    field :message, String, null: true
    field :errors, [Types::ErrorType], null: true

    argument :email, String, required: true
    argument :password, String, required: true
    argument :first_name, String, required: true
    argument :last_name, String, required: true

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
