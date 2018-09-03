class Account
  PROVIDERS = %i[facebook instagram].freeze

  include Mongoid::Document
  include Mongoid::Timestamps
  extend Enumerize

  field :provider, type: String
  field :uid, type: String
  field :access_token, type: String
  field :metadata, type: Hash

  enumerize :provider, in: PROVIDERS

  embedded_in :user

  validates :provider, :uid, presence: true
end
