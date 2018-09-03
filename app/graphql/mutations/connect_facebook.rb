module Mutations
  class ConnectFacebook < Mutations::Base
    # TODO: define return fields
    field :user, Types::UserType, null: true
    field :errors, [String], null: true

    # TODO: define arguments
    argument :access_token, String, required: true

    # TODO: define resolve method
    def resolve(access_token:)
      raise GraphQL::ExecutionError, "Access token required" unless access_token.present?
      @access_token = fb_oauth.exchange_access_token(access_token)

      if account.save
        create_pages
        { user: current_user }
      else
        { errors: ["Failed"] }
      end
    end

    def account
      @account ||= begin
        result = fb_graph.get_object("me?fields=email,name")
        current_user.accounts.find_or_initialize_by(provider: "facebook", uid: result["id"]).tap do |acc|
          acc.assign_attributes(access_token: @access_token, metadata: result)
        end
      end
    end

    def create_pages
      pages = fb_graph.get_connection("me", "accounts")
      pages.each do |page|
        current_user.pages.find_or_initialize_by(uid: page["id"]).tap do |p|
          p.assign_attributes(name: page["name"], access_token: page["access_token"], metadata: page)
          connect_instagram(p)
          p.save
        end
      end
    end

    def connect_instagram(page)
      result = fb_graph.get_object("#{page.uid}?fields=instagram_business_account")
      page.instagram_id = result["instagram_business_account"]["id"] if result["instagram_business_account"]
    end

    # get instagram account info, username, profile pic
  end
end
