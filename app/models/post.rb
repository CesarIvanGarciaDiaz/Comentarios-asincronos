class Post < ActiveRecord::Base
  # Remember to create a migration!
  validates :comentario, presence: true
  validates :autor ,presence: true
end
