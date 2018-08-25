require "rails_helper"

RSpec.describe Instagram::Media do
  let!(:user) { create(:user) }

  describe "create post" do
    context "type image" do
      let(:params) do
        {
          "id": "123456789",
          "images": {
            "standard_resolution": {
              "width": 640,
              "height": 360,
              "url": "https://example.com/image.jpg"
            }
          },
          "caption": {
            "text": "hello world"
          },
          "user_has_liked": true,
          "likes": {
            "count": 13
          },
          "tags": ["holla"],
          "comments": {
            "count": 0
          },
          "type": "image",
        }
      end

      it "create post" do
        media = ::Instagram::Media.new(user, params)
        media.save
        post = media.post

        expect(post.type).to eq("image")
        expect(post.caption).to eq("hello world")
        expect(post.likes).to eq(13)
        expect(post.thumbnail_url).not_to be_nil
        expect(post.metadata).to eq(params)
        expect(post.tags).to eq(["holla"])
      end
    end

    context "type video" do
      let(:params) do
        {
          "id": "123456789",
          "images": {
            "standard_resolution": {
              "url": "https://example.com/image.jpg"
            }
          },
          "caption": {
            "text": "60fps ifune",
          },
          "likes": {
            "count": 7
          },
          "tags": [],
          "comments": {
            "count": 0
          },
          "type": "video",
          "videos": {
            "standard_resolution": {
              "url": "https://example.com/video.mp4",
            }
          }
        }
      end

      it "create post" do
        media = ::Instagram::Media.new(user, params)
        media.save
        post = media.post

        expect(post.medias.count).to eq(1)
        expect(post.medias.first.media_url).not_to be_nil
        expect(post.metadata).to eq(params)
      end
    end

    context "type carousel" do
      let(:params) do
        {
          "images": {
            "standard_resolution": {
              "url": "https://example.com/image.jpg"
            }
          },
          "caption": nil,
          "likes": {
            "count": 15
          },
          "tags": [],
          "type": "carousel",
          "carousel_media": [
            {
              "images": {
                "standard_resolution": {
                  "url": "http://example.com/image.jpg"
                }
              },
              "type": "image"
            },
            {
              "images": {
                "standard_resolution": {
                  "url": "http://example.com/image2.jpg"
                }
              },
              "type": "image"
            },
            {
              "videos": {
                "standard_resolution": {
                  "url": "http://example.com/video.mp4"
                }
              },
              "type": "video"
            }
          ]
        }
      end

      it "create post" do
        media = ::Instagram::Media.new(user, params)
        media.save
        post = media.post

        expect(post.medias.count).to eq(3)
      end
    end
  end
end
