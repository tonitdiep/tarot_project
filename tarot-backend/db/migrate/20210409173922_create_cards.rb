class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :meaning_upright
      t.string :meaning_reverse
      t.references :suit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
