class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :email
      t.boolean :manager, default: false
      t.timestamps
    end
  end
end
