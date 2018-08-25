FactoryBot.define do
  sequence :media_id do |n|
    "123456789#{n}"
  end

  factory :post do
    association :user

    type { "image" }
    caption { Faker::Lorem.sentence }
    likes { 5 }
    tags { %w[code programming] }
    media_id { generate(:media_id) }
    thumbnail { Rack::Test::UploadedFile.new(Rails.root.join("spec/fixtures/image.jpg")) }
  end
end
