class ChangeColumNamesAddGroupToFood < ActiveRecord::Migration[5.0]
  def change
	  add_column :foods, :group_id, :integer
	  rename_column :groups, :text, :name
	  rename_column :subgroups, :subgroup, :name
  end
end
