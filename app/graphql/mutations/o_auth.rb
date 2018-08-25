module Mutations
  class OAuth < Mutations::Base
    # TODO: define return fields
    field :errors, [Types::ErrorType], null: true
    field :oauth, Types::OAuthType, null: true

    # TODO: define arguments
    argument :code, String, required: true
    argument :state, String, required: false

    # TODO: define resolve method
    def resolve(code:, state:)
      instagram = Instagram::API.new(code: code, state: state).access_token
      if instagram["error_type"]
        { errors: errors_alert(["Failed to connect instagram"]) }
      else
        account = context[:current_user].accounts.find_or_initialize_by(provider: "instagram", uid: instagram["access_token"])
        account.metadata = instagram["user"] unless account.persisted?
        account.access_token = instagram["access_token"]

        { oauth: account }
      end
    end
  end
end
