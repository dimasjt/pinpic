require 'active_support/core_ext/module/delegation'

module Instagram
  class Comment
    attr_accessor :user, :post, :metadata, :comment

    delegate :comment_id, :text, :username, :post, to: :comment

    def initialize(user, post, metadata)
      @user = user
      @post = post
      @metadata = metadata.deep_symbolize_keys
      @comment = post.comments.new

      assign_data
    end

    def save
      @comment.save
    end

    def assign_data
      comment.tap do |c|
        c.metadata = metadata
        c.comment_id = metadata[:id]
        c.text = metadata[:text]
        c.username = metadata[:from][:username]
      end
    end
  end
end
