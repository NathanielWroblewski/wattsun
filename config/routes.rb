Wattsun::Application.routes.draw do
  root to: 'wattsun#index'

  get '/wattsun/solar_homes', to: 'wattsun#solar_homes'
  get '/wattsun/map', to: 'wattsun#map'

  resources :wattsun, only: :index
end
