class MessagesController < ApplicationController

  def create
    @message = Message.create(message_params)
  end

  def show
    @message = Message.find_by(id: params[:id])
    render json: @message
  end

  private

  def message_params
    params.require(:message).permit(:id, :content, :user_id, :chat_id)
  end

end
