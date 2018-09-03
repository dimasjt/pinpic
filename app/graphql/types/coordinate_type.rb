module Types
  class CoordinateType < Types::BaseObject
    field :lat, Float, null: true
    field :lng, Float, null: true

    def lat
      object.to_hsh(:lat, :lng)[:lat]
    end

    def lng
      object.to_hsh(:lat, :lng)[:lng]
    end
  end
end
