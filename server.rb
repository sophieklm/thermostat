require 'sinatra'

set :public_folder, proc { File.join(root)}

get '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
end


post '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
end
