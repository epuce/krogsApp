class ChangePriceToDecimal < ActiveRecord::Migration
  def change
    change_column :foods, :price, :decimal
  end
end
