class MessagesController < ApplicationController

  def index
    @messages = Message.all
    render json: @messages
  end

  def create
    @message = Message.create(message_params)
    render json: @message
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
