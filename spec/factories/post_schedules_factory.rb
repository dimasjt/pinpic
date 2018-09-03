FactoryBot.define do
  factory :post_schedule do
    association :user
    caption { Faker::Lorem.sentence }
  end
end
