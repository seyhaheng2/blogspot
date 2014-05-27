class SiteController < ApplicationController
  def index
  	@products = Product.last(2)
    @trains = Train.last(3)
  end

  def about
  end

  def train
  	@trains = Train.all
    @tran = Train.last(1)
  end

  def show
    @product = Product.friendly.find(params[:product_id])
    # if request.path != product_path(@product)
    #   redirect_to @product, status: :moved_permanently
    # end
  end

  def showtrain
    @train = Train.find(params[:train_id])
  end

  def contact
  end

  def blog
  	@products = Product.all
  	@prolast = Product.last(1)
  end
end
