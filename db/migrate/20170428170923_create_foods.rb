class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.integer :group_id
      t.timestamps null: false
    end
  end
end
