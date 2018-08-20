module Mutations
  class Login < GraphQL::Schema::Mutation
    include Devise::Controllers::SignInOut
    # TODO: define return fields
    # field :user, Types::UserType, null: false
    field :token, String, null: false

    # TODO: define arguments
    argument :email, String, required: true
    argument :password, String, required: true

    # TODO: define resolve method
    def resolve(email:, password:)
      user = User.find_for_database_authentication(email: email)

      if user && user&.valid_password?(password)
        { token: user.token }
      else
        GraphQL::ExecutionError.new "Invalid email or password"
      end
    end
  end
end
