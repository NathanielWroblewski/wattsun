Wattsun::Application.routes.draw do
  root to: 'wattsun#index'

  get '/wattsun/solar_homes', to: 'wattsun#solar_homes'

  resources :wattsun, only: [:index, :show]
end
