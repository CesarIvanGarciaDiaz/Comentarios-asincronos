class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :comentario
      t.string :autor
    end
  end
end
