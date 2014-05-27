class AddColumnsToProduct < ActiveRecord::Migration
  def change
    add_column :products, :slug, :string
    add_index :products, :slug
    add_column :products, :logo, :string
  end
end
