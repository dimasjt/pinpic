module Types
  class ReviewType < Types::BaseObject
    field :id, ID, null: false
    field :message, String, null: false
    field :rating, Integer, null: false

    field :place, Types::PlaceType, null: true
    field :user, Types::UserType, null: true

    def place
      object.reviewable
    end
  end
end
