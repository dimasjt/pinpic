class PostMedia
  include Mongoid::Document

  mount_uploader :media, ::MediaUploader

  field :type, type: String

  embedded_in :post
end
