class ChatsController < ApplicationController
  def create
    @chat = Chat.create(chat_params)
  end

  def show
    @chat = Chat.find_by(id: params[:id])
    render json: @chat
  end

  private

  def chat_params
    params.require(:chat).permit(:id, user_ids: [])
  end

end