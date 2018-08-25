module Instagram
  class Media
    attr_accessor :metadata, :user, :post

    def initialize(user, metadata)
      @metadata = metadata.deep_symbolize_keys
      @user = user
      @post = user.posts.new

      assign_data
      if %w[image video].include?(post.type)
        send("assign_#{post.type}", metadata[post.type.pluralize.to_sym])
      else
        assign_carousel
      end
    end

    def save
      post.save
    end

    private

    def assign_data
      post.tap do |p|
        p.metadata = metadata
        p.caption = metadata[:caption] ? metadata[:caption][:text] : nil
        p.type = metadata[:type]
        p.likes = metadata[:likes] ? metadata[:likes][:count] : 0
        p.remote_thumbnail_url = metadata[:images][:standard_resolution][:url]
        p.tags = metadata[:tags]
      end
    end

    def assign_video(video_hash = {})
      post.medias.new(type: "video", remote_media_url: video_hash[:standard_resolution][:url])
    end

    def assign_image(image_hash = {})
      post.medias.new(type: "image", remote_media_url: image_hash[:standard_resolution][:url])
    end

    def assign_carousel
      metadata[:carousel_media].each do |media|
        send("assign_#{media[:type]}", media[media[:type].pluralize.to_sym])
      end
    end
  end
end