class CreateVisits < ActiveRecord::Migration[5.1]
  def change
    create_table :visits do |t|
      t.string :guid, :primary_key
      t.string :url

      t.timestamps
    end
  end
end
