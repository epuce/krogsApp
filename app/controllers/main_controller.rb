class MainController < ApplicationController
  skip_before_action :authorize

  def index
    @maintexts = Maintext.all
    @foods = Food.all
    @pictures = Picture.all
    @subgroups = Subgroup.all
  end
end
