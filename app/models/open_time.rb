class OpenTime
  include Mongoid::Document
  field :open_time, type: String
  field :close_time, type: String
  field :day, type: String

  embedded_in :place
end
