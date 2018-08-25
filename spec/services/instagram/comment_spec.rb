require "rails_helper"

RSpec.describe Instagram::Comment do
  let(:user) { create(:user) }
  let(:post) { create(:post) }

  describe "create post comment" do
    it "have data" do
      metadata = {
        "id": "17871690403230697",
        "from": {
          "username": "dimasjt"
        },
        "text": "hello dimas",
        "created_time": "1526009697"
      }

      comment = ::Instagram::Comment.new(user, post, metadata)
      comment.save
      expect(comment.comment_id).to eq("17871690403230697")
      expect(comment.username).to eq("dimasjt")
      expect(comment.text).to eq("hello dimas")
      expect(comment.post).to eq(post)
      expect(comment.comment.metadata).not_to be_nil
    end
  end
end
