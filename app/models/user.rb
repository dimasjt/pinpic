class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include Paranoid.new default_scope: true, field: :deleted_at
  include Authentication

  mount_uploader :avatar, ::AvatarUploader

  field :first_name, type: String
  field :last_name, type: String

  embeds_many :accounts

  has_many :places
  has_many :file_stores
  has_many :wishlists
  has_many :reviews

  validates :first_name, :last_name, presence: true

  def instagram
    accounts.where(provider: "instagram").first
  end
end
