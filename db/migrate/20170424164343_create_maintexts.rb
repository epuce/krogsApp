class CreateMaintexts < ActiveRecord::Migration
  def change
    create_table :maintexts do |t|
      t.text :text
      t.boolean :isActive
      t.timestamps null: false
    end
  end
end
