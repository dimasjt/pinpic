module Mutations
  class Register < GraphQL::Schema::Mutation
    # TODO: define return fields
    field :user, Types::UserType, null: true
    field :errors, [String], null: false

    # TODO: define arguments
    argument :email, String, required: true
    argument :password, String, required: true

    # TODO: define resolve method
    def resolve(args)
      user = User.new(args)
      if user.save
        {
          user: user,
          errors: []
        }
      else
        {
          user: nil,
          errors: user.errors.full_messages
        }
      end
    end
  end
end
