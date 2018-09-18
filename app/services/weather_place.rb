class WeatherPlace
  attr_accessor :place

  def initialize(place)
    @place = place
  end

  def weather
    if weather?
      @weather
    else
      response = DarkSky.new(place.location.y, place.location.x).request
      return nil if response.try(:error)
      @weather = create_weather(response)
    end
  end

  def weather?
    @weather ||= begin
      Weather.where(
        created_at: {
          '$gte': Time.now.beginning_of_day,
          '$lt': Time.now.tomorrow.beginning_of_day
        },
        location: place.location
      ).first
    end
    @weather.present?
  end

  def create_weather(response)
    Weather.create(
      location: { latitude: response.latitude, longitude: response.longitude },
      metadata: response
    )
  end
end
