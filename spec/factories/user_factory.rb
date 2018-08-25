FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { "letmein123!" }
  end
end
