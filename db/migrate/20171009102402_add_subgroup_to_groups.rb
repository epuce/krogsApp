class AddSubgroupToGroups < ActiveRecord::Migration
  def change
    add_column :groups, :subgroup, :string
    add_column :groups, :suborder, :integer
    add_column :groups, :subIsActive, :boolean
  end
end
