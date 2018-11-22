class MessagesController < ApplicationController

  def create
    @message = Message.create(id: params[:id], content: [:content], user_id: [:user_id])
  end

  def show
    @message = Message.find_by(id: params[:id])
    render json: @message
  end

  private

  def message_params
    params.require(:message).permit(:id, :content, :user_id)
  end

end
