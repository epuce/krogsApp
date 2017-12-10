class ChangeGroupIdToSubgroupsIdForFoods < ActiveRecord::Migration[5.0]
  def change
    remove_column :foods, :group_id
    add_column :foods, :subgroup_id, :integer
  end
end
