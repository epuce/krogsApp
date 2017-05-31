class SessionsController < ApplicationController
    skip_before_action :authorize
    def new
    end

    def create
      user = User.where(name: params[:name]).first

      if user and user.authenticate(params[:password])
        session[:user_id] = user.id
        redirect_to maintexts_url
      else
        redirect_to login_url, alert: "Parole un lietotāja vārds nesakrīt"
      end
    end

    def destroy
      session[:user_id] = nil
      redirect_to root_url, notice: "Izrakstījies"
    end

    def index
      @groups = Group.all
    end
end
