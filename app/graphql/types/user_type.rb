module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :connected, Boolean, null: false

    field :accounts, [Types::AccountType], null: true
    field :pages, [Types::PageType], null: true

    def connected
      object.accounts.present?
    end
  end
end
