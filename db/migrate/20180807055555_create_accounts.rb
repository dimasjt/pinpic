class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.belongs_to :user, foreign_key: true
      t.string :provider
      t.string :uid

      t.timestamps
    end
  end
end
