module Mutations
  class Login < Mutations::Base
    include Devise::Controllers::SignInOut
    # TODO: define return fields
    field :token, String, null: true
    field :errors, [Types::ErrorType], null: true

    # TODO: define arguments
    argument :email, String, required: true
    argument :password, String, required: true

    # TODO: define resolve method
    def resolve(email:, password:)
      user = User.find_for_database_authentication(email: email)

      if user && user&.valid_password?(password)
        { token: user.token }
      else
        { errors: errors_alert(["Email or password is invalid"]) }
      end
    end
  end
end
