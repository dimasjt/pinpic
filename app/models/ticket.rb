class Ticket
  include Mongoid::Document

  field :price, type: Money
  field :name, type: String
  field :description, type: String

  belongs_to :place
end
