class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :email, :primary_key
      t.string :name, null: false

      t.timestamps
    end
  end
end
