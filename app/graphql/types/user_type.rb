module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :first_name, String, null: false
    field :last_name, String, null: false

    field :accounts, [Types::AccountType], null: true
    field :avatar, Types::AvatarType, null: true

    def connected
      object.accounts.present?
    end
  end
end
