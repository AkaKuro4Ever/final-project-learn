class UsersController < ApplicationController

before_action :set_user
skip_before_action :set_user, only: [:destroy, :create, :index, :new]

  def index
    @users = User.all
    render json: @users
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:id, :email, :username, :password, :password_confirmation)
  end
end
