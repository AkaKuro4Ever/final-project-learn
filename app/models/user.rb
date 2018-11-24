class User < ApplicationRecord

  has_many :messages
  belongs_to :chat
  # has_many :user_chats
  # has_many :chats, through: :user_chats
end
