class Api::BaseController < ActionController::Base
  include Devise::Controllers::Helpers

  skip_before_action :verify_authenticity_token
  before_action :authentication

  def authentication
    return unless request.headers["Authorization"]
    _, token = request.headers["Authorization"].split(/\s/)
    @current_user = User.find_by_token(token)
  end
end
