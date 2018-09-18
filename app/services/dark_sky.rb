require "hash_dot"

class DarkSky
  include HTTParty
  base_uri "https://api.darksky.net/forecast/#{ENV['DARKSKY_KEY']}"

  attr_accessor :latitude, :longitude

  def initialize(latitude, longitude)
    @latitude = latitude
    @longitude = longitude
  end

  def request
    response = self.class.get("/#{latitude},#{longitude}").to_dot
  rescue HTTParty::Error
    Rails.logger.error "DarkSky: #{response.code} #{response}"
    response.to_dot
  end
end
