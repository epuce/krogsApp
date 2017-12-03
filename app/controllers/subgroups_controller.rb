class SubgroupsController < ApplicationController
  before_action :set_subgroup, only: [:show, :edit, :update, :destroy]

  # POST /groups
  def create
    @subgroup = Subgroup.new(subgroup_params)

    respond_to do |format|
      if @subgroup.save
        format.html { redirect_to groups_path, notice: 'Veiksmīgi pievienota apakšgrupa' }
      else
        format.html { redirect_to groups_path, notice: 'Lūdzu mēģini vēlreiz, kaut kas nogāja greizi' }
      end
    end
  end

  # PATCH/PUT /groups/1
  def update
    respond_to do |format|
      if @subgroup.update(subgroup_params)
        format.html { redirect_to groups_path, notice: 'Apakšgrupa veiksmīgi izmainīta' }
      else
        format.html { redirect_to groups_path }
      end
    end
  end

  # DELETE /groups/1
  # DELETE /groups/1.json
  def destroy
    @subgroup.destroy
    respond_to do |format|
      format.html { redirect_to groups_path, notice: 'Apakšgrupa veiksmīgi dzēsta' }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_subgroup
    @subgroup = Subgroup.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def subgroup_params
    params.fetch(:subgroup, {})
    params.require(:subgroup).permit(:name, :order, :isActive, :group_id)
  end
end
