class GroupsController < ApplicationController
  before_action :set_group, only: [:show, :edit, :update, :destroy]

  # GET /groups
  def index
    @groups = Group.all
    @group = Group.new

    @subgroups = Subgroup.all
    @subgroup = Subgroup.new
  end

  # POST /groups
  def create
    @group = Group.new(group_params)

    respond_to do |format|
      if @group.save
        format.html { redirect_to groups_path, notice: 'Veiksmīgi pievienota grupa' }
      else
        format.html { redirect_to groups_path, notice: 'Lūdzu mēģini vēlreiz, kaut kas nogāja greizi' }
      end
    end
  end

  # PATCH/PUT /groups/1
  def update
    respond_to do |format|
      if @group.update(group_params)
        format.html { redirect_to groups_path, notice: 'Grupa vai apakšgrupa veiksmīgi izmainīta' }
      else
        format.html { redirect_to groups_path }
      end
    end
  end

  # DELETE /groups/1
  # DELETE /groups/1.json
  def destroy
    @group.destroy

    Subgroup.where(group_id: @group.id).destroy_all

    respond_to do |format|
      format.html { redirect_to groups_path, notice: 'Grupa vai apakšgrupa veiksmīgi dzēsta' }
    end
  end

  def update_multiple
    Group.update(params[:groups].keys, params[:groups].values)

    Subgroup.update(params[:subgroups].keys, params[:subgroups].values)

    redirect_to groups_path
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group
      @group = Group.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def group_params
      params.fetch(:group, {})
      params.require(:group).permit(:name, :order, :isActive)
    end
end
