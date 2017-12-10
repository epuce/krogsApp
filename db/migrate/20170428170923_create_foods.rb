class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :name
      t.string :description
      t.decimal :price
      t.integer :order
      t.integer :group_id
      t.integer :subgroup_id
      t.boolean :isActive
      t.timestamps null: false
    end
  end
end
