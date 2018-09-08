class Wishlist
  include Mongoid::Document

  belongs_to :wishlistable, polymorphic: true
  belongs_to :user
end
