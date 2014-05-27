class Product < ActiveRecord::Base
	mount_uploader :image, ImageUploader
	extend FriendlyId
	friendly_id :name, use: [:slugged, :finders]
end
