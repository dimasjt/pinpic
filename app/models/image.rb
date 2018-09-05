class Image
  include Mongoid::Document
  include Mongoid::Timestamps

  mount_uploader :file, ImageUploader

  field :width, type: Integer
  field :height, type: Integer

  belongs_to :imageable, polymorphic: true

  validates :file, presence: true
end
