class PostComment
  include Mongoid::Document

  field :metadata, type: Hash
  field :comment_id, type: String
  field :text, type: String
  field :username, type: String

  belongs_to :post

  validates :comment_id, uniqueness: true
end
