class MainController < ApplicationController
  def index
    @maintexts = Maintext.all
    @groups = Group.all
    @foods = Food.all
    @pictures = Picture.all
  end
end
