class Instagram
  include HTTParty
  include Rails.application.routes.url_helpers

  base_uri "https://api.instagram.com"

  attr_accessor :options

  def initialize(opt = {})
    @options = opt
  end

  def access_token
    self.class.post("/oauth/access_token", body: access_token_options)
  end

  def default_url_options
    ActionMailer::Base.default_url_options
  end

  def access_token_options
    {
      client_id: ENV["INSTAGRAM_CLIENT_ID"],
      client_secret: ENV["INSTAGRAM_CLIENT_SECRET"],
      grant_type: "authorization_code",
      redirect_uri: user_instagram_omniauth_callback_url,
      code: options[:code]
    }
  end
end