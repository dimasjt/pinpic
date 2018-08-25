FactoryBot.define do
  factory :post_media, class: "PostMedia" do
    association :post
  end
end
