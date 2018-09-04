module Mutations
  class CreatePlace < Mutations::Base
    # TODO: define return fields
    field :place, Types::PlaceType, null: true
    field :errors, Types::ErrorType, null: true

    # TODO: define arguments
    argument :name, String, required: true
    argument :address, String, required: true
    argument :city_id, ID, required: true
    argument :description, String, required: true
    argument :file_ids, [ID], required: true
    argument :latitude, String, required: true
    argument :longitude, String, required: true
    argument :tag_ids, [ID], required: false

    # TODO: define resolve method
    def resolve(args = {})
      files = FileStore.where(id: { '$in': args.delete(:file_ids) })

      location = args.slice(:latitude, :longitude)
      params = args.except(:latitude, :longitude).merge(location: location)

      # binding.pry
      @place = current_user.places.new(params)
      files.each do |file|
        @place.images.build(file: file.file)
      end

      if @place.save
        files.destroy_all
        { place: @place }
      else
        { errors: errors(@place) }
      end
    end

  end
end
