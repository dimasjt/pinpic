class Place
  STATUS = %i[pending approved rejected].freeze

  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Geospatial
  include Mongoid::Slug
  extend Enumerize

  field :name, type: String
  field :description, type: String
  field :location, type: Point
  field :status, type: String
  field :address, type: String
  field :average_rating, type: Float, default: 0
  slug :name, reserve: RESERVED_SLUG

  enumerize :status, in: STATUS, default: :pending, scope: true

  belongs_to :user
  belongs_to :city
  has_many :images, as: :imageable, inverse_of: :imageable, autosave: true, dependent: :destroy
  has_many :wishlist, as: :wishlistable, dependent: :destroy
  has_many :reviews, as: :reviewable, dependent: :destroy
  has_many :tickets, dependent: :destroy
  embeds_many :open_times
  has_and_belongs_to_many :tags

  accepts_nested_attributes_for :open_times, :tickets
end
