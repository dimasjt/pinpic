class User
  ROLES = %i[user admin].freeze

  include Mongoid::Document
  include Mongoid::Timestamps
  include Paranoid.new default_scope: true, field: :deleted_at
  include Authentication
  extend Enumerize

  mount_uploader :avatar, ::AvatarUploader

  field :first_name, type: String
  field :last_name, type: String
  field :role, type: String

  enumerize :role, in: ROLES, default: :user, scope: true

  embeds_many :accounts

  has_many :places
  has_many :file_stores
  has_many :wishlists
  has_many :reviews

  validates :first_name, :last_name, presence: true

  accepts_nested_attributes_for :accounts

  def instagram
    accounts.where(provider: "instagram").first
  end
end
