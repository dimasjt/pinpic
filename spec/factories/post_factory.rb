FactoryBot.define do
  factory :post do
    association :user

    type { "image" }
    caption { Faker::Lorem.sentence }
    likes { 5 }
  end
end
