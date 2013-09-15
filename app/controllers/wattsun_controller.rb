class WattsunController < ApplicationController

  def index

  end

  def map
    # @lat, @long = Geocoder.coordinates(params[:address])
    parse_address(params[:address])
    @lat = 37.9300
    @long = -121.9500
  end

  def solar_homes
    homes = SolarHome.all.reject{ |home| home.latitude.nil? }
    markers = homes.map{ |home| [ home.latitude, home.longitude ] }
    render json: { markers: markers }
  end

  def money_bags
  end
end
