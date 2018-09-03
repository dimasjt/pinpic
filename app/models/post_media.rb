class PostMedia
  include Mongoid::Document

  mount_uploader :media, ::MediaUploader

  field :type, type: String

  embedded_in :postable, polymorphic: true
end
