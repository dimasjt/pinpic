class Image
  include Mongoid::Document
  include Mongoid::Timestamps

  mount_uploader :file, FileStoreUploader

  belongs_to :imageable, polymorphic: true

  validates :file, presence: true
end
