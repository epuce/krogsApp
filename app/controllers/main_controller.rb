class MainController < ApplicationController
  def index
    @maintexts = Maintext.all
  end
end
