Rails.application.routes.draw do
  resources :chats, only: [:create, :show]
  resources :messages, only: [:create, :show]
  resources :users, only: [:index, :new, :create, :show]
  get '/currentuser' => 'users#current'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
