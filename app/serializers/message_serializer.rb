class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user, :content
end
