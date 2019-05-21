Rails.application.routes.draw do
  resources :visits, only: [:index, :create]
  resources :contacts, only: [:index, :create, :new, :show]

  root 'contacts#index'
end
