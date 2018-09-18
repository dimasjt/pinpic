module Types
  class WeatherDayType < Types::BaseObject
    field :summary, String, null: true
    field :temperature_max, Float, null: true
    field :temperature_min, Float, null: true
    field :icon, String, null: true
    field :time, Integer, null: true
  end
end
