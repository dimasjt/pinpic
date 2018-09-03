class PostSchedule
  STATUS = %i[pending success failed].freeze

  include Mongoid::Document
  include Mongoid::Timestamps
  extend Enumerize

  field :caption, type: String
  field :publish_at, type: DateTime
  field :status

  enumerize :status, in: STATUS, default: :pending

  belongs_to :user
  embeds_many :medias, as: :postable, class_name: "PostMedia", cascade_callbacks: true
  has_and_belongs_to_many :pages

  after_create :create_post_schedule_job

  private

  def create_post_schedule_job
    PostScheduleJob.set(wait_until: publish_at).perform_later(post_schedule_id: id.to_s)
  end
end
