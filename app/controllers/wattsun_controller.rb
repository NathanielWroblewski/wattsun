class WattsunController < ApplicationController

  def index

  end

  def show
    @lat, @long = Geocoder.coordinates(params[:q])
  end
end
