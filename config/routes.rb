require "sidekiq/web"

Rails.application.routes.draw do
  mount RailsAdmin::Engine => "/admin", as: "rails_admin"
  namespace :api, defaults: { format: :json } do
    post "/upload", to: "upload#create"
    post "/graphql", to: "graphql#execute"
  end

  devise_for :users

  mount Sidekiq::Web, at: "/sidekiq"

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/api/graphql"
  end

  root to: "pages#index"

  get "/oauth/callback", to: "pages#index", as: :oauth_callback
  get "*path", to: "pages#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

ActiveSupport::Notifications.instrument "routes_loaded.application"
