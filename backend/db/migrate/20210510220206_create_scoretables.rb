class CreateScoretables < ActiveRecord::Migration[6.1]
  def change
    create_table :scoretables do |t|
      t.integer :score
      t.integer :player_id
      t.string :player_name

      t.timestamps
    end
  end
end
