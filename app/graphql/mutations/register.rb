module Mutations
  class Register < GraphQL::Schema::Mutation
    # TODO: define return fields
    field :user, Types::UserType, null: true

    # TODO: define arguments
    argument :email, String, required: true
    argument :password, String, required: true

    # TODO: define resolve method
    def resolve(args)
      user = User.new(args)
      if user.save
        { user: user }
      else
        GraphQL::ExecutionError.new user.errors.full_messages.join(', ')
      end
    end
  end
end
