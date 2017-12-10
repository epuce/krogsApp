class AddOrderAndIsActiveToFoods < ActiveRecord::Migration
  def change
    add_column :foods, :order, :integer
    add_column :foods, :isActive, :boolean
  end
end
