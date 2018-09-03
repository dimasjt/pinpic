FactoryBot.define do
  factory :place do
    name { Faker::Address.street_name }
    description { Faker::Lorem.sentence }
    location { { lat: Faker::Address.latitude, lng: Faker::Address.longitude } }

    association :user
  end
end
