class RemoveUserChatsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :user_chats
  end
end
