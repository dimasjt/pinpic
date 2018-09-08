module Mutations
  class WishlistPlace < Mutations::Base
    # TODO: define return fields
    field :wishlist, Types::WishlistType, null: true
    field :errors, Types::ErrorType, null: true
    field :state, String, null: true

    # TODO: define arguments
    argument :place_id, ID, required: true

    # TODO: define resolve method
    def resolve(place_id:)
      place = Place.where(status: :approved).find(place_id)
      wishlist = current_user.wishlists.find_or_initialize_by(wishlistable: place)

      if wishlist.persisted?
        wishlist.destroy
        { wishlist: wishlist, state: "deleted" }
      elsif wishlist.save
        { wishlist: wishlist, state: "created" }
      else
        { errors: errors(wishlist) }
      end
    end
  end
end
