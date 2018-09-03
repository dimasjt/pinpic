module Types
  class PageType < Types::BaseObject
    field :id, ID, null: false
    field :uid, String, null: false
    field :name, String, null: false
    field :instagram_id, String, null: true
  end
end
