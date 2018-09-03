require "rails_helper"

RSpec.describe Api::UploadController, type: :controller do
  let(:user) { create(:user) }

  describe "POST #create" do
    let(:params) {
      { file: fixture_file_upload("#{Rails.root}/spec/fixtures/image.jpg", "image/jpg") }
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
          post :create, params: { file: nil }
          expect(JSON.parse(response.body)["errors"]).to eq(["File can\'t be blank"])
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
          file = FileStore.first
          json = {
            file_url: file.file_url,
            id: file.id.to_s,
            user_id: file.user_id.to_s
          }
          expected = JSON.parse(response.body)["data"]["file_store"].sort_by { |k, _v| k }.to_h.symbolize_keys
          expect(expected).to eq(json)
        end
      end
    end
  end

end
