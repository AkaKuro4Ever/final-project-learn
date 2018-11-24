class AddChatIdColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :chat_id, :integer
  end
end
