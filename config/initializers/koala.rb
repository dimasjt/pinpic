ActiveSupport::Notifications.subscribe "routes_loaded.application" do
  Koala.configure do |config|
    # config.access_token = MY_TOKEN
    # config.app_access_token = MY_APP_ACCESS_TOKEN
    config.app_id = ENV["FACEBOOK_APP_ID"]
    config.app_secret = ENV["FACEBOOK_APP_SECRET"]
    config.oauth_callback_url = Rails.application.routes.url_helpers.oauth_callback_url(ActionMailer::Base.default_url_options)
  end
end
