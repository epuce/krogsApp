class AddGroupToSubgroups < ActiveRecord::Migration
  def change
    add_column :subgroups, :group_id, :integer
  end
end
