module Mutations
  class CreateReview < Mutations::Base
    # TODO: define return fields
    field :review, Types::ReviewType, null: true
    field :errors, [Types::ErrorType], null: true

    # TODO: define arguments
    argument :message, String, required: true
    argument :rating, Integer, required: true
    argument :place_id, ID, required: true

    # TODO: define resolve method
    def resolve(args = {})
      place = Place.with_status(:approved).find(args.delete(:place_id))
      review = current_user.reviews.new(args.merge(reviewable: place))

      if review.save
        { review: review }
      else
        { errors: errors(review) }
      end
    end
  end
end
