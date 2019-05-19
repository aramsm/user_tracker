Rails.application.routes.draw do
  get 'visits/index', to: 'visits#index'

  resources :contacts, only: [:index, :create, :new, :show]

  root 'contacts#index'
end
