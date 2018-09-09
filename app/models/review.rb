class Review
  MIN_RATING = 0
  MAX_RATING = 5

  include Mongoid::Document
  include Mongoid::Timestamps

  field :rating, type: Float
  field :message, type: String

  belongs_to :user
  belongs_to :reviewable, polymorphic: true

  validates :rating, :message, presence: true
  validates :rating, numericality: {
    greater_than_or_equal_to: MIN_RATING,
    less_than_or_equal_to: MAX_RATING
  }

  after_create :calculate_average
  after_update :calculate_average

  private

  def calculate_average
    average_rating = reviewable.reviews.sum(:rating) / reviewable.reviews.count
    reviewable.update_attribute(:average_rating, average_rating)
  end
end
