require "rails_helper"

RSpec.describe Api::UploadController, type: :controller do
  let(:user) { create(:user) }

  describe "POST #create" do
    let(:file) { fixture_file_upload("#{Rails.root}/spec/fixtures/image.jpg", "image/jpg") }
    let(:params) {
      { files: [file, file] }
    }

    before do
      request.headers["Content-Type"] = "multipart/form-data"
    end

    context "when invalid" do
      context "when not login" do
        before { post :create, params: params }

        it "return 401" do
          expect(response.status).to eq(401)
        end

        it "return errors" do
          expect(JSON.parse(response.body)["errors"]).to eq(["Not login"])
        end
      end

      context "invalid params" do
        before { token_user(user) }

        it "return errors" do
          post :create, params: {}
          expect(response.status).to eq(422)
        end

        it "return json errors" do
          post :create, params: { files: nil }
          expect(JSON.parse(response.body)["errors"]).to eq(["Files can\'t be blank"])
        end
      end
    end

    context "when valid" do
      context "with valid params" do
        before do
          token_user(user)
          post :create, params: params
        end

        it "create file store" do
          expect(response.status).to eq(201)
        end

        it "return json" do
          expect(JSON.parse(response.body)["data"]["file_stores"].length).to eq(2)
        end
      end
    end
  end

end
