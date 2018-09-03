module Mutations
  class CreateSchedule < Mutations::Base
    # TODO: define return fields
    field :post_schedule, Types::PostScheduleType, null: true
    field :errors, Types::ErrorType, null: true

    # TODO: define arguments
    argument :caption, String, required: true
    argument :publish_at, String, required: false
    argument :file_ids, [ID], required: true
    argument :page_ids, [ID], required: true

    # TODO: define resolve method
    def resolve(args = {})
      file_stores = current_user.file_stores.where(id: { '$in': args.delete(:file_ids) })
      post_schedule = current_user.post_schedules.new(args)
      file_stores.each do |fs|
        post_schedule.medias.build(type: "image", media: fs.file)
      end

      if post_schedule.save
        file_stores.destroy_all
        { post_schedule: post_schedule }
      else
        { errors: errors(post_schedule) }
      end
    end
  end
end
