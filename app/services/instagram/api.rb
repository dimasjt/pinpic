module Instagram
  class API
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

    def media_self
      self.class.get("/v1/users/self/media/recent?access_token=#{options[:access_token]}")
    end

    def user_self
      self.class.get("/v1/users/self?access_token=#{options[:access_token]}")
    end

    def default_url_options
      ActionMailer::Base.default_url_options
    end

    def access_token_options
      {
        client_id: ENV["INSTAGRAM_CLIENT_ID"],
        client_secret: ENV["INSTAGRAM_CLIENT_SECRET"],
        grant_type: "authorization_code",
        redirect_uri: oauth_callback_url,
        code: options[:code]
      }
    end
  end
end