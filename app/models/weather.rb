class Weather
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Geospatial

  field :metadata, type: Hash
  field :location, type: Point
end
