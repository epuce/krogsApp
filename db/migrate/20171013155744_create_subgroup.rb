class CreateSubgroup < ActiveRecord::Migration
  def change
    create_table :subgroups do |t|
      t.string :subgroup
      t.integer :order
      t.boolean :isActive
    end
  end
end
