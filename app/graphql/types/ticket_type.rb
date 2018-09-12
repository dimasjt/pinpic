module Types
  class TicketType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :description, String, null: true

    field :price, Integer, null: true
  end
end
