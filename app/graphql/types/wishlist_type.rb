module Types
  class WishlistType < Types::BaseObject
    field :id, ID, null: false

    field :place, Types::PlaceType, null: false

    def place
      object.wishlistable
    end
  end
end
