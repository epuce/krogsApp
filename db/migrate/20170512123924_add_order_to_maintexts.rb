class AddOrderToMaintexts < ActiveRecord::Migration
  def change
    add_column :maintexts, :order, :string
  end
end
