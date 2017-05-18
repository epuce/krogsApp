class MainController < ApplicationController
  skip_before_action :authorize

  def index
    @maintexts = Maintext.all
    @groups = Group.all
    @foods = Food.all
    @pictures = Picture.all
  end
end
