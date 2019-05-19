class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :email, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :contacts, :email, unique: true
  end
end
