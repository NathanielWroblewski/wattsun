# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'

# CSV.foreach('./solar_homes.csv') do |row|
#   SolarHome.create(full_address: row.join(', '))
# end
CSV.foreach('./pg_dump.dmp') do |row|
  home = SolarHome.new
  home.update_attributes(latitude: row[2], longitude: row[3])
  home.save
end
