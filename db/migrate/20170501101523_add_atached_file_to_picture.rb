class AddAtachedFileToPicture < ActiveRecord::Migration
  def change
    remove_column :pictures, :name
    add_attachment :pictures, :name
  end
end
