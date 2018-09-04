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
  slug :name, reserve: RESERVED_SLUG

  enumerize :status, in: STATUS, default: :pending

  belongs_to :user
  belongs_to :city
  has_many :images, as: :imageable, autosave: true
  embeds_many :open_times
  has_and_belongs_to_many :tags
end
