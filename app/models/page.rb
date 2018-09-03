class Page
  include Mongoid::Document

  field :uid, type: String
  field :name, type: String
  field :access_token, type: String
  field :metadata, type: String
  field :instagram_id, type: String

  belongs_to :user
  has_and_belongs_to_many :schedules, class_name: "PostSchedule"
end
