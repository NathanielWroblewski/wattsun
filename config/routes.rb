Wattsun::Application.routes.draw do
  root to: 'wattsun#index'

  resources :wattsun, only: [:index, :show]
end
