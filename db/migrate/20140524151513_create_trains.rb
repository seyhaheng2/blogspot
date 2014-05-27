class CreateTrains < ActiveRecord::Migration
  def change
    create_table :trains do |t|
      t.string :name
      t.string :image
      t.string :video
      t.text :description

      t.timestamps
    end
  end
end
