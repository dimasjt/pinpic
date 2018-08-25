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

  enumerize :type, in: TYPES

  embeds_many :medias, class_name: "PostMedia"
  belongs_to :user
end
