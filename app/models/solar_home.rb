class SolarHome < ActiveRecord::Base

  attr_accessible :full_address, :lat, :long

  geocoded_by :full_address
  after_validation :geocode

end
