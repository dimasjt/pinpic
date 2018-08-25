require "rails_helper"
require "jwt"

RSpec.describe User, type: :model do
  let(:user) { create(:user) }

  describe "#find_by_token" do
    it "found user" do
      user_find = User.find_by_token(user.token)
      expect(user_find).to eq(user)
    end

    it "not found any user" do
      token = JWT.encode({ email: "test@gmail.com", id: "10" }, ENV["JWT_SECRET"], "HS256")
      user_find = User.find_by_token(token)
      expect(user_find).to be_nil
    end
  end

  describe "#instagram" do
    it "found account provider instagram" do
      user.accounts.create(provider: "instagram", uid: "123")
      expect(user.instagram).to eq(user.accounts.first)
    end

    it "return nil" do
      expect(user.instagram).to be_nil
    end
  end
end
