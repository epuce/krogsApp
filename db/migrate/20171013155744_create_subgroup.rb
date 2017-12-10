class CreateSubgroup < ActiveRecord::Migration
  def change
    create_table :subgroups do |t|
      t.string :name
      t.integer :order
      t.integer :group_id
      t.boolean :isActive
    end
  end
end
