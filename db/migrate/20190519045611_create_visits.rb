class CreateVisits < ActiveRecord::Migration[5.1]
  def change
    create_table :visits do |t|
      t.string :guid, null: false
      t.string :url, null: false

      t.timestamps
    end
  end
end
