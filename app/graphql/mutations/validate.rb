module Mutations
  class Validate < GraphQL::Schema::Mutation
    field :user, Types::UserType, null: false

    def resolve
      if context[:current_user]
        {
          user: context[:current_user]
        }
      else
        GraphQL::ExecutionError.new("Not login")
      end
    end
  end
end
