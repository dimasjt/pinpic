class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include Paranoid.new default_scope: true, field: :deleted_at

  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable,
         :trackable

  ## Database authenticatable
  field :email,              type: String, default: ""
  field :encrypted_password, type: String, default: ""

  ## Recoverable
  field :reset_password_token,   type: String
  field :reset_password_sent_at, type: Time

  ## Rememberable
  field :remember_created_at, type: Time

  ## Trackable
  field :sign_in_count,      type: Integer, default: 0
  field :current_sign_in_at, type: Time
  field :last_sign_in_at,    type: Time
  field :current_sign_in_ip, type: String
  field :last_sign_in_ip,    type: String

  ## Confirmable
  field :confirmation_token,   type: String
  field :confirmed_at,         type: Time
  field :confirmation_sent_at, type: Time
  field :unconfirmed_email,    type: String # Only if using reconfirmable

  ## Lockable
  field :failed_attempts, type: Integer, default: 0 # Only if lock strategy is :failed_attempts
  field :unlock_token,    type: String # Only if unlock strategy is :email or :both
  field :locked_at,       type: Time

  def token
    JWT.encode payload, ENV["JWT_SECRET"], "HS256"
  end

  def self.find_by_token(token)
    payload, _jwt = JWT.decode token, ENV["JWT_SECRET"], true, algorithm: "HS256"
    find(payload["id"])
  rescue JWT::ExpiredSignature, JWT::DecodeError, Mongoid::Errors::DocumentNotFound
    nil
  end

  def payload
    as_json(only: :email).merge(
      id: id.to_s,
      exp: Time.now.to_i + 24 * 7 * 3600
    )
  end
end
