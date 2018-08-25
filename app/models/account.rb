class Account
  include Mongoid::Document
  include Mongoid::Timestamps

  field :provider, type: String
  field :uid, type: String
  field :access_token, type: String
  field :metadata, type: Hash

  embedded_in :user

  validates :provider, :uid, presence: true
end
