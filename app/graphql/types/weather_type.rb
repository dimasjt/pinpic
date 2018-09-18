module Types
  class WeatherType < Types::BaseObject
    field :daily, [Types::WeatherDayType], null: true
    field :location, Types::CoordinateType, null: true

    def daily
      object.metadata[:daily][:data].map do |day|
        Hash[day.map do |key, val|
          [key.underscore, val]
        end]
      end
    end
  end
end
