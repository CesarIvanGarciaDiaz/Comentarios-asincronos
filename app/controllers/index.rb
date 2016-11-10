get '/' do
  # La siguiente linea hace render de la vista
  # que esta en app/views/index.erb
  @post=Post.all
  erb :index
end

get '/post' do
  erb :index
end

post '/post' do
  #resibe normal desde html
  #post = Post.new(comentario: params[:post]["comentario"], autor: params[:post]["autor"])
  #resibe desde javascript
  post = Post.new(comentario: params[:comentario], autor: params[:autor])
 post.save ? 'true' : 'false'
end
