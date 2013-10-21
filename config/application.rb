require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module Wattsun
  class Application < Rails::Application
    
    # For Heroku:
    config.assets.initialize_on_precompile = false

    config.serve_static_assets = true

    # If you set config.assets.initialize_on_precompile to false, be sure to test rake assets:precompile locally before deploying. It may expose bugs where your assets reference application objects or methods, since those are still in scope in development mode regardless of the value of this flag. Changing this flag also affects engines. Engines can define assets for precompilation as well. Since the complete environment is not loaded, engines (or other gems) will not be loaded, which can cause missing assets.
  end
end
