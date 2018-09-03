class FileStore
  include Mongoid::Document
  include Mongoid::Timestamps

  mount_uploader :file, FileStoreUploader

  belongs_to :user

  validates :file, presence: true
end
