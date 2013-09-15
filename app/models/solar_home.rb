class SolarHome < ActiveRecord::Base

  attr_accessible :full_address, :latitude, :longitude

  # geocoded_by :full_address
  # after_validation :geocode

end
