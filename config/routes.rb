Rails.application.routes.draw do
  resources :chats, only: [:index, :create, :show]
  resources :messages, only: [:index, :create, :show]
  resources :users, only: [:index, :new, :create, :show]
  resources :sessions, only: [:create]
  get '/currentuser' => 'users#current'
  # get '/signup' => 'users#new'
  # get '/login' => 'sessions#new'
  # post '/logout' => 'sessions#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
