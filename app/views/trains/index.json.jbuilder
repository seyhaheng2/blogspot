json.array!(@trains) do |train|
  json.extract! train, :id, :name, :image, :video, :description
  json.url train_url(train, format: :json)
end
