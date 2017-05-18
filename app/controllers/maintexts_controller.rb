class MaintextsController < ApplicationController
  before_action :set_maintext, only: [:show, :edit, :update, :destroy]

  # GET /maintexts
  # GET /maintexts.json
  def index
    @maintexts = Maintext.all
  end

  # GET /maintexts/1
  # GET /maintexts/1.json
  def show
  end

  # GET /maintexts/new
  def new
    @maintext = Maintext.new
  end

  # GET /maintexts/1/edit
  def edit
  end

  # POST /maintexts
  # POST /maintexts.json
  def create
    @maintext = Maintext.new(maintext_params)

    respond_to do |format|
      if @maintext.save
        format.html { redirect_to @maintext, notice: 'Maintext was successfully created.' }
        format.json { render :show, status: :created, location: @maintext }
      else
        format.html { render :new }
        format.json { render json: @maintext.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /maintexts/1
  # PATCH/PUT /maintexts/1.json
  def update
    respond_to do |format|
      if @maintext.update(maintext_params)
        format.html { redirect_to @maintext, notice: 'Maintext was successfully updated.' }
        format.json { render :show, status: :ok, location: @maintext }
      else
        format.html { render :edit }
        format.json { render json: @maintext.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /maintexts/1
  # DELETE /maintexts/1.json
  def destroy
    @maintext.destroy
    respond_to do |format|
      format.html { redirect_to maintexts_url, notice: 'Maintext was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_maintext
      @maintext = Maintext.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def maintext_params
      params.require(:maintext).permit(:text, :isActive, :order)
    end
end
