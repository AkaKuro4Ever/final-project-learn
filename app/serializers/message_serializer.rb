class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at
  belongs_to :user
  belongs_to :chat

  attribute :user do
    {username: object.user.username,
    id: object.user.id}
  end
  # attribute :user do
  #   object.user.username
  # end
end
