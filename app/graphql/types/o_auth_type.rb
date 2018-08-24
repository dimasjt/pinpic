module Types
  class OAuthType < Types::BaseObject
    field :provider, String, null: false
    field :uid, String, null: false
  end
end
