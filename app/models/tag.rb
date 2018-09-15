class Tag
  include Mongoid::Document

  field :name, type: String

  has_and_belongs_to_many :places
  has_one :image, as: :imageable, inverse_of: :imageable

  accepts_nested_attributes_for :image
end
