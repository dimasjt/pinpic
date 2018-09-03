class Place
  STATUS = %i[pending approved rejected].freeze

  include Mongoid::Document
  include Mongoid::Geospatial
  extend Enumerize

  field :name, type: String
  field :description, type: String
  field :location, type: Point
  field :status, type: String

  enumerize :status, in: STATUS, default: :pending

  belongs_to :user
  belongs_to :city
end
