module Mutations
  class InstagramMedia < GraphQL::Schema::Mutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false
    field :errors, [Types::ErrorType], null: true
    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    def resolve()
      user = context[:current_user]
      account = user.instagram

      if account&.access_token
        result = ::Instagram::API.new(access_token: account.access_token)
      else
        { errors: errors_alert("User did not connect with instagram. Connect with Instagram first") }
      end
    end
  end
end
