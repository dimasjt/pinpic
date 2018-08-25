FactoryBot.define do
  sequence :comment_id do |n|
    "1234#{n}"
  end

  factory :post_comment do
    association :post

    text { Faker::Lorem.sentence }
    username { Faker::Internet.username }
    comment_id { generate(:comment_id) }
  end
end
