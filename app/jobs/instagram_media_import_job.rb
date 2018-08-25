class InstagramMediaImportJob < ApplicationJob
  include ActiveJob::Status

  attr_accessor :access_token, :posts, :user

  queue_as :default

  def perform(access_token:, user_id:)
    @access_token = access_token
    @user = User.find(user_id)
    @posts = []

    import
    logger.info "Import success #{@posts.map(&:id)}"
  end

  def import(max_id = nil)
    result = api.media_self(max_id: max_id, count: 20).deep_symbolize_keys

    if result[:meta][:code] == 200
      save_media_as_post(result[:data])

      if result[:data].size == 20
        import(result[:data].last[:id])
      end
    else
      logger.debug "#{self.class} #{job_id} #import [#{result}]"
    end
  end

  def save_media_as_post(data = [])
    data.each do |media|
      post = Instagram::Media.new(user, media)
      post.save
      posts.push(post.post)
      logger.info "post saved #{post}"

      save_comment_as_post_comment(post.post)
    end
  end

  def save_comment_as_post_comment(post)
    result = api.media_comments(media_id: post.media_id).deep_symbolize_keys

    if result[:meta][:code] == 200
      result[:data].each do |comment_metadata|
        comment = Instagram::Comment.new(user, post, comment_metadata)
        comment.save
        logger.info "comment saved #{comment}"
      end
    else
      logger.debug "#{self.class} #{job_id} #save_comments_as_post_comment [#{result}]"
    end
  end

  def api
    @api ||= Instagram::API.new(access_token: access_token)
  end
end
