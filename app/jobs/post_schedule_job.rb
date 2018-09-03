class PostScheduleJob < ApplicationJob
  queue_as :default

  def perform(post_schedule_id:)
    @post_schedule = PostSchedule.find(post_schedule_id)
  end
end
