class Train < ActiveRecord::Base
	mount_uploader :image, ImageUploader
end
