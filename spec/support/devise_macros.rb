module DeviseMacros
  def login_user(user)
    @request.env["devise.mapping"] = Devise.mappings[:user]
    sign_in user
  end

  def token_user(user)
    @request.headers["Authorization"] = "Bearer #{user.token}"
  end
end
