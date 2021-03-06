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

  def create
    @user = User.create(user_params)
    render json: @user
  end

  def show
    render json: @user
  end

  def current
    @user = User.find(1)
    render json: @user
  end

  def login
    @user = User.find_by(username: user_params[:username])
    render json: @user
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:id, :email, :chat_id, :username, :password, :password_confirmation)
  end
end
