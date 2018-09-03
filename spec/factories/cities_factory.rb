FactoryBot.define do
  factory :city do
    name { Faker::Address.city }
    location { { lat: Faker::Address.latitude, longitude: Faker::Address.longitude } }
  end
end
