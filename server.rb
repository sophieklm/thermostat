require 'sinatra'

set :public_folder, proc { File.join(root)}

get '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  $saved_temperature
end


post '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  $saved_temperature = params[:saved_temperature]
end
