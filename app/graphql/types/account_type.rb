module Types
  class AccountType < Types::BaseObject
    field :id, ID, null: false
    field :provider, String, null: false
    field :uid, String, null: false
  end
end
