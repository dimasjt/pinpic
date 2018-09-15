class City
  include Mongoid::Document
  include Mongoid::Geospatial

  field :name, type: String
  field :location, type: Point
  field :featured, type: Boolean

  has_one :image, as: :imageable, inverse_of: :imageable
  has_many :places

  accepts_nested_attributes_for :image
end
