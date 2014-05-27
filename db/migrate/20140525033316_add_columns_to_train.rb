class AddColumnsToTrain < ActiveRecord::Migration
  def change
    add_column :trains, :logo, :string
  end
end
