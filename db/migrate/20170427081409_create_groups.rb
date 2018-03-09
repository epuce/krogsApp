class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name
      t.integer :order
      t.boolean :isActive
      t.timestamps null: false
    end
  end
end
