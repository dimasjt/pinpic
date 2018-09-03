source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

gem 'rails', '~> 5.2.1'
gem 'puma', '~> 3.11'
gem 'webpacker'

gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

gem 'bootsnap', '>= 1.1.0', require: false
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'carrierwave'
gem 'carrierwave-mongoid', require: 'carrierwave/mongoid'
gem 'mini_magick'

gem 'devise'
gem 'httparty'
gem 'jwt'
gem 'graphql', '~> 1.8.7'
gem 'mongoid'
gem 'mongoid-paranoid'
gem 'mongoid-geospatial', require: "mongoid/geospatial"
gem 'enumerize'
gem 'sidekiq'
gem 'activejob-status'
gem 'redis-rails'
gem 'koala', '~> 3.0.0'

gem 'bootstrap'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  gem 'dotenv-rails'
  gem 'pry-rails'

  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rubocop-rspec'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  gem 'letter_opener'

  gem 'rubocop', require: false
  gem 'graphiql-rails'

  gem 'guard'
  gem 'guard-rspec'
  gem 'terminal-notifier-guard', '~> 1.6.1'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15', '< 4.0'
  gem 'selenium-webdriver'
  # Easy installation and use of chromedriver to run system tests with Chrome
  gem 'chromedriver-helper'

  gem 'database_cleaner'
  gem 'rspec-rails'
  gem 'simplecov'
  gem 'timecop'
  gem 'webmock'
end
