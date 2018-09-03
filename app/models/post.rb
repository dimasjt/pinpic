class Post
  TYPES = %w[image video carousel].freeze

  include Mongoid::Document
  extend Enumerize

  mount_uploader :thumbnail, ::PostThumbnailUploader

  field :metadata, type: Hash
  field :type, type: String
  field :caption, type: String
  field :likes, type: Integer
  field :tags, type: Array
  field :media_id, type: String

  enumerize :type, in: TYPES

  embeds_many :medias, as: :postable, class_name: "PostMedia"
  has_many :comments, class_name: "PostComment"
  belongs_to :user

  validates :media_id, uniqueness: true
end
